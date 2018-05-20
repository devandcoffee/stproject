import * as bcrypt from "bcryptjs";
import { ResolverMap } from "./types/graphql-utils";
import { User } from "./entity/User";

export const resolvers: ResolverMap = {
  Query: {
    user: (_, { id }: GQL.IUserOnQueryArguments) => User.findOne(id),
    users: (_, {}) => User.find()
  },
  Mutation: {
    login: async (_, { email, password }: GQL.ILoginOnMutationArguments) => {
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
    createUser: async (
      _,
      { email, password }: GQL.ICreateUserOnMutationArguments
    ) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = User.create({
        email,
        password: hashedPassword
      });

      await user.save();
      return true;
    }
  }
};
