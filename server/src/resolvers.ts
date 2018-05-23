import * as bcrypt from "bcryptjs";
import { ResolverMap } from "./types/graphql-utils";
import { User } from "./entity/User";
import { Tournament } from "./entity/Tournament";
import { validate } from "class-validator";

export const resolvers: ResolverMap = {
  Query: {
    user: (_, { id }) => User.findOne(id),
    tournaments: (_, {}) => Tournament.find(),
    users: (_, {}) => User.find()
  },
  Mutation: {
    login: async (_, { email, password }) => {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return false;
      }

      const valid = await bcrypt.compare(password, user.password);

      if (!valid) {
        return false;
      }

      return true;
    },
    createUser: async (_, { email, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = User.create({
        email,
        password: hashedPassword
      });

      await user.save();
      return true;
    },
    createTournament: async (_, { userId, ...args }) => {
      const user = await User.findOne(userId);
      if (!user) {
        return;
      }

      const tournament = Tournament.create({ ...args, userId });
      tournament.user = user;

      const errors = await validate(tournament);
      if (errors.length > 0) {
        throw new Error(`Validation failed!`);
      }

      const result = await tournament.save();

      return result || null;
    },
    updateTournament: async (_, { ...args }) => {
      // for preventing save operation to insert a new row
      if (!Tournament.findOne(args.id)) {
        return null;
      }

      const tournament = Tournament.create(args);

      const errors = await validate(tournament);
      if (errors.length > 0) {
        throw new Error(`Validation failed!`);
      }

      const result = await tournament.save();

      return result || null;
    },
    removeTournament: async (_, { id }) => {
      const tournament = await Tournament.findOne(id);

      if (!tournament) {
        return null;
      }

      const result = await Tournament.remove(tournament);

      return { ...result, id };
    }
  }
};
