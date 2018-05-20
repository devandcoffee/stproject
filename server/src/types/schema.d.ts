// tslint:disable
// graphql typescript definitions

declare namespace GQL {
interface IGraphQLResponseRoot {
data?: IQuery | IMutation;
errors?: Array<IGraphQLResponseError>;
}

interface IGraphQLResponseError {
/** Required for all errors */
message: string;
locations?: Array<IGraphQLResponseErrorLocation>;
/** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
[propName: string]: any;
}

interface IGraphQLResponseErrorLocation {
line: number;
column: number;
}

interface IQuery {
__typename: "Query";
user: IUser;
users: Array<IUser>;
}

interface IUserOnQueryArguments {
id: number;
}

interface IUser {
__typename: "User";
id: number;
email: string;
}

interface IMutation {
__typename: "Mutation";
login: boolean | null;
createUser: boolean | null;
}

interface ILoginOnMutationArguments {
email: string;
password: string;
}

interface ICreateUserOnMutationArguments {
email: string;
password: string;
}
}

// tslint:enable
