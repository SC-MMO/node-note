
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Note
 * 
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model GroupMembership
 * 
 */
export type GroupMembership = $Result.DefaultSelection<Prisma.$GroupMembershipPayload>
/**
 * Model UserAccess
 * 
 */
export type UserAccess = $Result.DefaultSelection<Prisma.$UserAccessPayload>
/**
 * Model GroupAccess
 * 
 */
export type GroupAccess = $Result.DefaultSelection<Prisma.$GroupAccessPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupMembership`: Exposes CRUD operations for the **GroupMembership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMemberships
    * const groupMemberships = await prisma.groupMembership.findMany()
    * ```
    */
  get groupMembership(): Prisma.GroupMembershipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAccess`: Exposes CRUD operations for the **UserAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAccesses
    * const userAccesses = await prisma.userAccess.findMany()
    * ```
    */
  get userAccess(): Prisma.UserAccessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupAccess`: Exposes CRUD operations for the **GroupAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupAccesses
    * const groupAccesses = await prisma.groupAccess.findMany()
    * ```
    */
  get groupAccess(): Prisma.GroupAccessDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Note: 'Note',
    Group: 'Group',
    GroupMembership: 'GroupMembership',
    UserAccess: 'UserAccess',
    GroupAccess: 'GroupAccess'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "note" | "group" | "groupMembership" | "userAccess" | "groupAccess"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      GroupMembership: {
        payload: Prisma.$GroupMembershipPayload<ExtArgs>
        fields: Prisma.GroupMembershipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupMembershipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembershipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupMembershipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembershipPayload>
          }
          findFirst: {
            args: Prisma.GroupMembershipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembershipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupMembershipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembershipPayload>
          }
          findMany: {
            args: Prisma.GroupMembershipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembershipPayload>[]
          }
          create: {
            args: Prisma.GroupMembershipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembershipPayload>
          }
          createMany: {
            args: Prisma.GroupMembershipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupMembershipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembershipPayload>[]
          }
          delete: {
            args: Prisma.GroupMembershipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembershipPayload>
          }
          update: {
            args: Prisma.GroupMembershipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembershipPayload>
          }
          deleteMany: {
            args: Prisma.GroupMembershipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupMembershipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupMembershipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembershipPayload>[]
          }
          upsert: {
            args: Prisma.GroupMembershipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembershipPayload>
          }
          aggregate: {
            args: Prisma.GroupMembershipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupMembership>
          }
          groupBy: {
            args: Prisma.GroupMembershipGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupMembershipGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupMembershipCountArgs<ExtArgs>
            result: $Utils.Optional<GroupMembershipCountAggregateOutputType> | number
          }
        }
      }
      UserAccess: {
        payload: Prisma.$UserAccessPayload<ExtArgs>
        fields: Prisma.UserAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload>
          }
          findFirst: {
            args: Prisma.UserAccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload>
          }
          findMany: {
            args: Prisma.UserAccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload>[]
          }
          create: {
            args: Prisma.UserAccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload>
          }
          createMany: {
            args: Prisma.UserAccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAccessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload>[]
          }
          delete: {
            args: Prisma.UserAccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload>
          }
          update: {
            args: Prisma.UserAccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload>
          }
          deleteMany: {
            args: Prisma.UserAccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAccessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload>[]
          }
          upsert: {
            args: Prisma.UserAccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAccessPayload>
          }
          aggregate: {
            args: Prisma.UserAccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAccess>
          }
          groupBy: {
            args: Prisma.UserAccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAccessCountArgs<ExtArgs>
            result: $Utils.Optional<UserAccessCountAggregateOutputType> | number
          }
        }
      }
      GroupAccess: {
        payload: Prisma.$GroupAccessPayload<ExtArgs>
        fields: Prisma.GroupAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupAccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupAccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupAccessPayload>
          }
          findFirst: {
            args: Prisma.GroupAccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupAccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupAccessPayload>
          }
          findMany: {
            args: Prisma.GroupAccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupAccessPayload>[]
          }
          create: {
            args: Prisma.GroupAccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupAccessPayload>
          }
          createMany: {
            args: Prisma.GroupAccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupAccessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupAccessPayload>[]
          }
          delete: {
            args: Prisma.GroupAccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupAccessPayload>
          }
          update: {
            args: Prisma.GroupAccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupAccessPayload>
          }
          deleteMany: {
            args: Prisma.GroupAccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupAccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupAccessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupAccessPayload>[]
          }
          upsert: {
            args: Prisma.GroupAccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupAccessPayload>
          }
          aggregate: {
            args: Prisma.GroupAccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupAccess>
          }
          groupBy: {
            args: Prisma.GroupAccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupAccessCountArgs<ExtArgs>
            result: $Utils.Optional<GroupAccessCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    note?: NoteOmit
    group?: GroupOmit
    groupMembership?: GroupMembershipOmit
    userAccess?: UserAccessOmit
    groupAccess?: GroupAccessOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    notes: number
    ownedGroups: number
    memberships: number
    userAccesses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | UserCountOutputTypeCountNotesArgs
    ownedGroups?: boolean | UserCountOutputTypeCountOwnedGroupsArgs
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    userAccesses?: boolean | UserCountOutputTypeCountUserAccessesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMembershipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAccessWhereInput
  }


  /**
   * Count Type NoteCountOutputType
   */

  export type NoteCountOutputType = {
    groupAccesses: number
    userAccesses: number
  }

  export type NoteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupAccesses?: boolean | NoteCountOutputTypeCountGroupAccessesArgs
    userAccesses?: boolean | NoteCountOutputTypeCountUserAccessesArgs
  }

  // Custom InputTypes
  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteCountOutputType
     */
    select?: NoteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeCountGroupAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupAccessWhereInput
  }

  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeCountUserAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAccessWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    memberships: number
    accesses: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | GroupCountOutputTypeCountMembershipsArgs
    accesses?: boolean | GroupCountOutputTypeCountAccessesArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMembershipWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupAccessWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userId: number | null
  }

  export type UserSumAggregateOutputType = {
    userId: number | null
  }

  export type UserMinAggregateOutputType = {
    userId: number | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    userId: number | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    username: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userId?: true
  }

  export type UserSumAggregateInputType = {
    userId?: true
  }

  export type UserMinAggregateInputType = {
    userId?: true
    username?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    username?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    username?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: number
    username: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    notes?: boolean | User$notesArgs<ExtArgs>
    ownedGroups?: boolean | User$ownedGroupsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    userAccesses?: boolean | User$userAccessesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "username" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | User$notesArgs<ExtArgs>
    ownedGroups?: boolean | User$ownedGroupsArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    userAccesses?: boolean | User$userAccessesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      notes: Prisma.$NotePayload<ExtArgs>[]
      ownedGroups: Prisma.$GroupPayload<ExtArgs>[]
      memberships: Prisma.$GroupMembershipPayload<ExtArgs>[]
      userAccesses: Prisma.$UserAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      username: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notes<T extends User$notesArgs<ExtArgs> = {}>(args?: Subset<T, User$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownedGroups<T extends User$ownedGroupsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userAccesses<T extends User$userAccessesArgs<ExtArgs> = {}>(args?: Subset<T, User$userAccessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.notes
   */
  export type User$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * User.ownedGroups
   */
  export type User$ownedGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null
    where?: GroupMembershipWhereInput
    orderBy?: GroupMembershipOrderByWithRelationInput | GroupMembershipOrderByWithRelationInput[]
    cursor?: GroupMembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMembershipScalarFieldEnum | GroupMembershipScalarFieldEnum[]
  }

  /**
   * User.userAccesses
   */
  export type User$userAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessInclude<ExtArgs> | null
    where?: UserAccessWhereInput
    orderBy?: UserAccessOrderByWithRelationInput | UserAccessOrderByWithRelationInput[]
    cursor?: UserAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAccessScalarFieldEnum | UserAccessScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteAvgAggregateOutputType = {
    noteId: number | null
    authorId: number | null
  }

  export type NoteSumAggregateOutputType = {
    noteId: number | null
    authorId: number | null
  }

  export type NoteMinAggregateOutputType = {
    noteId: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: number | null
  }

  export type NoteMaxAggregateOutputType = {
    noteId: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorId: number | null
  }

  export type NoteCountAggregateOutputType = {
    noteId: number
    title: number
    content: number
    createdAt: number
    updatedAt: number
    authorId: number
    _all: number
  }


  export type NoteAvgAggregateInputType = {
    noteId?: true
    authorId?: true
  }

  export type NoteSumAggregateInputType = {
    noteId?: true
    authorId?: true
  }

  export type NoteMinAggregateInputType = {
    noteId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
  }

  export type NoteMaxAggregateInputType = {
    noteId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
  }

  export type NoteCountAggregateInputType = {
    noteId?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    authorId?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _avg?: NoteAvgAggregateInputType
    _sum?: NoteSumAggregateInputType
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    noteId: number
    title: string
    content: string
    createdAt: Date
    updatedAt: Date
    authorId: number
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    noteId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    groupAccesses?: boolean | Note$groupAccessesArgs<ExtArgs>
    userAccesses?: boolean | Note$userAccessesArgs<ExtArgs>
    _count?: boolean | NoteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    noteId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    noteId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectScalar = {
    noteId?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorId?: boolean
  }

  export type NoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"noteId" | "title" | "content" | "createdAt" | "updatedAt" | "authorId", ExtArgs["result"]["note"]>
  export type NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    groupAccesses?: boolean | Note$groupAccessesArgs<ExtArgs>
    userAccesses?: boolean | Note$userAccessesArgs<ExtArgs>
    _count?: boolean | NoteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      groupAccesses: Prisma.$GroupAccessPayload<ExtArgs>[]
      userAccesses: Prisma.$UserAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      noteId: number
      title: string
      content: string
      createdAt: Date
      updatedAt: Date
      authorId: number
    }, ExtArgs["result"]["note"]>
    composites: {}
  }

  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = $Result.GetResult<Prisma.$NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteFindUniqueArgs>(args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteFindFirstArgs>(args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `noteId`
     * const noteWithNoteIdOnly = await prisma.note.findMany({ select: { noteId: true } })
     * 
     */
    findMany<T extends NoteFindManyArgs>(args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
     */
    create<T extends NoteCreateArgs>(args: SelectSubset<T, NoteCreateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteCreateManyArgs>(args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {NoteCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `noteId`
     * const noteWithNoteIdOnly = await prisma.note.createManyAndReturn({
     *   select: { noteId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
     */
    delete<T extends NoteDeleteArgs>(args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteUpdateArgs>(args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteDeleteManyArgs>(args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteUpdateManyArgs>(args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {NoteUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `noteId`
     * const noteWithNoteIdOnly = await prisma.note.updateManyAndReturn({
     *   select: { noteId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NoteUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends NoteUpsertArgs>(args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    groupAccesses<T extends Note$groupAccessesArgs<ExtArgs> = {}>(args?: Subset<T, Note$groupAccessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userAccesses<T extends Note$userAccessesArgs<ExtArgs> = {}>(args?: Subset<T, Note$userAccessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Note model
   */
  interface NoteFieldRefs {
    readonly noteId: FieldRef<"Note", 'Int'>
    readonly title: FieldRef<"Note", 'String'>
    readonly content: FieldRef<"Note", 'String'>
    readonly createdAt: FieldRef<"Note", 'DateTime'>
    readonly updatedAt: FieldRef<"Note", 'DateTime'>
    readonly authorId: FieldRef<"Note", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }

  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Note createManyAndReturn
   */
  export type NoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Note updateManyAndReturn
   */
  export type NoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }

  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Note.groupAccesses
   */
  export type Note$groupAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAccess
     */
    select?: GroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAccess
     */
    omit?: GroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAccessInclude<ExtArgs> | null
    where?: GroupAccessWhereInput
    orderBy?: GroupAccessOrderByWithRelationInput | GroupAccessOrderByWithRelationInput[]
    cursor?: GroupAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupAccessScalarFieldEnum | GroupAccessScalarFieldEnum[]
  }

  /**
   * Note.userAccesses
   */
  export type Note$userAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessInclude<ExtArgs> | null
    where?: UserAccessWhereInput
    orderBy?: UserAccessOrderByWithRelationInput | UserAccessOrderByWithRelationInput[]
    cursor?: UserAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAccessScalarFieldEnum | UserAccessScalarFieldEnum[]
  }

  /**
   * Note without action
   */
  export type NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    groupId: number | null
    ownerId: number | null
  }

  export type GroupSumAggregateOutputType = {
    groupId: number | null
    ownerId: number | null
  }

  export type GroupMinAggregateOutputType = {
    groupId: number | null
    ownerId: number | null
  }

  export type GroupMaxAggregateOutputType = {
    groupId: number | null
    ownerId: number | null
  }

  export type GroupCountAggregateOutputType = {
    groupId: number
    ownerId: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    groupId?: true
    ownerId?: true
  }

  export type GroupSumAggregateInputType = {
    groupId?: true
    ownerId?: true
  }

  export type GroupMinAggregateInputType = {
    groupId?: true
    ownerId?: true
  }

  export type GroupMaxAggregateInputType = {
    groupId?: true
    ownerId?: true
  }

  export type GroupCountAggregateInputType = {
    groupId?: true
    ownerId?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    groupId: number
    ownerId: number
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    groupId?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    memberships?: boolean | Group$membershipsArgs<ExtArgs>
    accesses?: boolean | Group$accessesArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    groupId?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    groupId?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    groupId?: boolean
    ownerId?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"groupId" | "ownerId", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    memberships?: boolean | Group$membershipsArgs<ExtArgs>
    accesses?: boolean | Group$accessesArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      memberships: Prisma.$GroupMembershipPayload<ExtArgs>[]
      accesses: Prisma.$GroupAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      groupId: number
      ownerId: number
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `groupId`
     * const groupWithGroupIdOnly = await prisma.group.findMany({ select: { groupId: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `groupId`
     * const groupWithGroupIdOnly = await prisma.group.createManyAndReturn({
     *   select: { groupId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `groupId`
     * const groupWithGroupIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { groupId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    memberships<T extends Group$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, Group$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accesses<T extends Group$accessesArgs<ExtArgs> = {}>(args?: Subset<T, Group$accessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly groupId: FieldRef<"Group", 'Int'>
    readonly ownerId: FieldRef<"Group", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.memberships
   */
  export type Group$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null
    where?: GroupMembershipWhereInput
    orderBy?: GroupMembershipOrderByWithRelationInput | GroupMembershipOrderByWithRelationInput[]
    cursor?: GroupMembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMembershipScalarFieldEnum | GroupMembershipScalarFieldEnum[]
  }

  /**
   * Group.accesses
   */
  export type Group$accessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAccess
     */
    select?: GroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAccess
     */
    omit?: GroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAccessInclude<ExtArgs> | null
    where?: GroupAccessWhereInput
    orderBy?: GroupAccessOrderByWithRelationInput | GroupAccessOrderByWithRelationInput[]
    cursor?: GroupAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupAccessScalarFieldEnum | GroupAccessScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model GroupMembership
   */

  export type AggregateGroupMembership = {
    _count: GroupMembershipCountAggregateOutputType | null
    _avg: GroupMembershipAvgAggregateOutputType | null
    _sum: GroupMembershipSumAggregateOutputType | null
    _min: GroupMembershipMinAggregateOutputType | null
    _max: GroupMembershipMaxAggregateOutputType | null
  }

  export type GroupMembershipAvgAggregateOutputType = {
    userId: number | null
    groupId: number | null
  }

  export type GroupMembershipSumAggregateOutputType = {
    userId: number | null
    groupId: number | null
  }

  export type GroupMembershipMinAggregateOutputType = {
    userId: number | null
    groupId: number | null
  }

  export type GroupMembershipMaxAggregateOutputType = {
    userId: number | null
    groupId: number | null
  }

  export type GroupMembershipCountAggregateOutputType = {
    userId: number
    groupId: number
    _all: number
  }


  export type GroupMembershipAvgAggregateInputType = {
    userId?: true
    groupId?: true
  }

  export type GroupMembershipSumAggregateInputType = {
    userId?: true
    groupId?: true
  }

  export type GroupMembershipMinAggregateInputType = {
    userId?: true
    groupId?: true
  }

  export type GroupMembershipMaxAggregateInputType = {
    userId?: true
    groupId?: true
  }

  export type GroupMembershipCountAggregateInputType = {
    userId?: true
    groupId?: true
    _all?: true
  }

  export type GroupMembershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMembership to aggregate.
     */
    where?: GroupMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMemberships to fetch.
     */
    orderBy?: GroupMembershipOrderByWithRelationInput | GroupMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMemberships
    **/
    _count?: true | GroupMembershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupMembershipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupMembershipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMembershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMembershipMaxAggregateInputType
  }

  export type GetGroupMembershipAggregateType<T extends GroupMembershipAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMembership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMembership[P]>
      : GetScalarType<T[P], AggregateGroupMembership[P]>
  }




  export type GroupMembershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMembershipWhereInput
    orderBy?: GroupMembershipOrderByWithAggregationInput | GroupMembershipOrderByWithAggregationInput[]
    by: GroupMembershipScalarFieldEnum[] | GroupMembershipScalarFieldEnum
    having?: GroupMembershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMembershipCountAggregateInputType | true
    _avg?: GroupMembershipAvgAggregateInputType
    _sum?: GroupMembershipSumAggregateInputType
    _min?: GroupMembershipMinAggregateInputType
    _max?: GroupMembershipMaxAggregateInputType
  }

  export type GroupMembershipGroupByOutputType = {
    userId: number
    groupId: number
    _count: GroupMembershipCountAggregateOutputType | null
    _avg: GroupMembershipAvgAggregateOutputType | null
    _sum: GroupMembershipSumAggregateOutputType | null
    _min: GroupMembershipMinAggregateOutputType | null
    _max: GroupMembershipMaxAggregateOutputType | null
  }

  type GetGroupMembershipGroupByPayload<T extends GroupMembershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupMembershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMembershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMembershipGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMembershipGroupByOutputType[P]>
        }
      >
    >


  export type GroupMembershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    groupId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMembership"]>

  export type GroupMembershipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    groupId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMembership"]>

  export type GroupMembershipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    groupId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMembership"]>

  export type GroupMembershipSelectScalar = {
    userId?: boolean
    groupId?: boolean
  }

  export type GroupMembershipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "groupId", ExtArgs["result"]["groupMembership"]>
  export type GroupMembershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type GroupMembershipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }
  export type GroupMembershipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | GroupDefaultArgs<ExtArgs>
  }

  export type $GroupMembershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupMembership"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      groupId: number
    }, ExtArgs["result"]["groupMembership"]>
    composites: {}
  }

  type GroupMembershipGetPayload<S extends boolean | null | undefined | GroupMembershipDefaultArgs> = $Result.GetResult<Prisma.$GroupMembershipPayload, S>

  type GroupMembershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupMembershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupMembershipCountAggregateInputType | true
    }

  export interface GroupMembershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupMembership'], meta: { name: 'GroupMembership' } }
    /**
     * Find zero or one GroupMembership that matches the filter.
     * @param {GroupMembershipFindUniqueArgs} args - Arguments to find a GroupMembership
     * @example
     * // Get one GroupMembership
     * const groupMembership = await prisma.groupMembership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupMembershipFindUniqueArgs>(args: SelectSubset<T, GroupMembershipFindUniqueArgs<ExtArgs>>): Prisma__GroupMembershipClient<$Result.GetResult<Prisma.$GroupMembershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupMembership that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupMembershipFindUniqueOrThrowArgs} args - Arguments to find a GroupMembership
     * @example
     * // Get one GroupMembership
     * const groupMembership = await prisma.groupMembership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupMembershipFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupMembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupMembershipClient<$Result.GetResult<Prisma.$GroupMembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMembership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembershipFindFirstArgs} args - Arguments to find a GroupMembership
     * @example
     * // Get one GroupMembership
     * const groupMembership = await prisma.groupMembership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupMembershipFindFirstArgs>(args?: SelectSubset<T, GroupMembershipFindFirstArgs<ExtArgs>>): Prisma__GroupMembershipClient<$Result.GetResult<Prisma.$GroupMembershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMembership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembershipFindFirstOrThrowArgs} args - Arguments to find a GroupMembership
     * @example
     * // Get one GroupMembership
     * const groupMembership = await prisma.groupMembership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupMembershipFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupMembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupMembershipClient<$Result.GetResult<Prisma.$GroupMembershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupMemberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMemberships
     * const groupMemberships = await prisma.groupMembership.findMany()
     * 
     * // Get first 10 GroupMemberships
     * const groupMemberships = await prisma.groupMembership.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const groupMembershipWithUserIdOnly = await prisma.groupMembership.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends GroupMembershipFindManyArgs>(args?: SelectSubset<T, GroupMembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupMembership.
     * @param {GroupMembershipCreateArgs} args - Arguments to create a GroupMembership.
     * @example
     * // Create one GroupMembership
     * const GroupMembership = await prisma.groupMembership.create({
     *   data: {
     *     // ... data to create a GroupMembership
     *   }
     * })
     * 
     */
    create<T extends GroupMembershipCreateArgs>(args: SelectSubset<T, GroupMembershipCreateArgs<ExtArgs>>): Prisma__GroupMembershipClient<$Result.GetResult<Prisma.$GroupMembershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupMemberships.
     * @param {GroupMembershipCreateManyArgs} args - Arguments to create many GroupMemberships.
     * @example
     * // Create many GroupMemberships
     * const groupMembership = await prisma.groupMembership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupMembershipCreateManyArgs>(args?: SelectSubset<T, GroupMembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupMemberships and returns the data saved in the database.
     * @param {GroupMembershipCreateManyAndReturnArgs} args - Arguments to create many GroupMemberships.
     * @example
     * // Create many GroupMemberships
     * const groupMembership = await prisma.groupMembership.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupMemberships and only return the `userId`
     * const groupMembershipWithUserIdOnly = await prisma.groupMembership.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupMembershipCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupMembershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMembershipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupMembership.
     * @param {GroupMembershipDeleteArgs} args - Arguments to delete one GroupMembership.
     * @example
     * // Delete one GroupMembership
     * const GroupMembership = await prisma.groupMembership.delete({
     *   where: {
     *     // ... filter to delete one GroupMembership
     *   }
     * })
     * 
     */
    delete<T extends GroupMembershipDeleteArgs>(args: SelectSubset<T, GroupMembershipDeleteArgs<ExtArgs>>): Prisma__GroupMembershipClient<$Result.GetResult<Prisma.$GroupMembershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupMembership.
     * @param {GroupMembershipUpdateArgs} args - Arguments to update one GroupMembership.
     * @example
     * // Update one GroupMembership
     * const groupMembership = await prisma.groupMembership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupMembershipUpdateArgs>(args: SelectSubset<T, GroupMembershipUpdateArgs<ExtArgs>>): Prisma__GroupMembershipClient<$Result.GetResult<Prisma.$GroupMembershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupMemberships.
     * @param {GroupMembershipDeleteManyArgs} args - Arguments to filter GroupMemberships to delete.
     * @example
     * // Delete a few GroupMemberships
     * const { count } = await prisma.groupMembership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupMembershipDeleteManyArgs>(args?: SelectSubset<T, GroupMembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMemberships
     * const groupMembership = await prisma.groupMembership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupMembershipUpdateManyArgs>(args: SelectSubset<T, GroupMembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMemberships and returns the data updated in the database.
     * @param {GroupMembershipUpdateManyAndReturnArgs} args - Arguments to update many GroupMemberships.
     * @example
     * // Update many GroupMemberships
     * const groupMembership = await prisma.groupMembership.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupMemberships and only return the `userId`
     * const groupMembershipWithUserIdOnly = await prisma.groupMembership.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupMembershipUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupMembershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMembershipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupMembership.
     * @param {GroupMembershipUpsertArgs} args - Arguments to update or create a GroupMembership.
     * @example
     * // Update or create a GroupMembership
     * const groupMembership = await prisma.groupMembership.upsert({
     *   create: {
     *     // ... data to create a GroupMembership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMembership we want to update
     *   }
     * })
     */
    upsert<T extends GroupMembershipUpsertArgs>(args: SelectSubset<T, GroupMembershipUpsertArgs<ExtArgs>>): Prisma__GroupMembershipClient<$Result.GetResult<Prisma.$GroupMembershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupMemberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembershipCountArgs} args - Arguments to filter GroupMemberships to count.
     * @example
     * // Count the number of GroupMemberships
     * const count = await prisma.groupMembership.count({
     *   where: {
     *     // ... the filter for the GroupMemberships we want to count
     *   }
     * })
    **/
    count<T extends GroupMembershipCountArgs>(
      args?: Subset<T, GroupMembershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMembershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupMembershipAggregateArgs>(args: Subset<T, GroupMembershipAggregateArgs>): Prisma.PrismaPromise<GetGroupMembershipAggregateType<T>>

    /**
     * Group by GroupMembership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembershipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupMembershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMembershipGroupByArgs['orderBy'] }
        : { orderBy?: GroupMembershipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupMembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupMembership model
   */
  readonly fields: GroupMembershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMembership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupMembershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroupMembership model
   */
  interface GroupMembershipFieldRefs {
    readonly userId: FieldRef<"GroupMembership", 'Int'>
    readonly groupId: FieldRef<"GroupMembership", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GroupMembership findUnique
   */
  export type GroupMembershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembership to fetch.
     */
    where: GroupMembershipWhereUniqueInput
  }

  /**
   * GroupMembership findUniqueOrThrow
   */
  export type GroupMembershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembership to fetch.
     */
    where: GroupMembershipWhereUniqueInput
  }

  /**
   * GroupMembership findFirst
   */
  export type GroupMembershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembership to fetch.
     */
    where?: GroupMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMemberships to fetch.
     */
    orderBy?: GroupMembershipOrderByWithRelationInput | GroupMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMemberships.
     */
    cursor?: GroupMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMemberships.
     */
    distinct?: GroupMembershipScalarFieldEnum | GroupMembershipScalarFieldEnum[]
  }

  /**
   * GroupMembership findFirstOrThrow
   */
  export type GroupMembershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembership to fetch.
     */
    where?: GroupMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMemberships to fetch.
     */
    orderBy?: GroupMembershipOrderByWithRelationInput | GroupMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMemberships.
     */
    cursor?: GroupMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMemberships.
     */
    distinct?: GroupMembershipScalarFieldEnum | GroupMembershipScalarFieldEnum[]
  }

  /**
   * GroupMembership findMany
   */
  export type GroupMembershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null
    /**
     * Filter, which GroupMemberships to fetch.
     */
    where?: GroupMembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMemberships to fetch.
     */
    orderBy?: GroupMembershipOrderByWithRelationInput | GroupMembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMemberships.
     */
    cursor?: GroupMembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMemberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMemberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMemberships.
     */
    distinct?: GroupMembershipScalarFieldEnum | GroupMembershipScalarFieldEnum[]
  }

  /**
   * GroupMembership create
   */
  export type GroupMembershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupMembership.
     */
    data: XOR<GroupMembershipCreateInput, GroupMembershipUncheckedCreateInput>
  }

  /**
   * GroupMembership createMany
   */
  export type GroupMembershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupMemberships.
     */
    data: GroupMembershipCreateManyInput | GroupMembershipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupMembership createManyAndReturn
   */
  export type GroupMembershipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null
    /**
     * The data used to create many GroupMemberships.
     */
    data: GroupMembershipCreateManyInput | GroupMembershipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMembership update
   */
  export type GroupMembershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupMembership.
     */
    data: XOR<GroupMembershipUpdateInput, GroupMembershipUncheckedUpdateInput>
    /**
     * Choose, which GroupMembership to update.
     */
    where: GroupMembershipWhereUniqueInput
  }

  /**
   * GroupMembership updateMany
   */
  export type GroupMembershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupMemberships.
     */
    data: XOR<GroupMembershipUpdateManyMutationInput, GroupMembershipUncheckedUpdateManyInput>
    /**
     * Filter which GroupMemberships to update
     */
    where?: GroupMembershipWhereInput
    /**
     * Limit how many GroupMemberships to update.
     */
    limit?: number
  }

  /**
   * GroupMembership updateManyAndReturn
   */
  export type GroupMembershipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null
    /**
     * The data used to update GroupMemberships.
     */
    data: XOR<GroupMembershipUpdateManyMutationInput, GroupMembershipUncheckedUpdateManyInput>
    /**
     * Filter which GroupMemberships to update
     */
    where?: GroupMembershipWhereInput
    /**
     * Limit how many GroupMemberships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMembership upsert
   */
  export type GroupMembershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupMembership to update in case it exists.
     */
    where: GroupMembershipWhereUniqueInput
    /**
     * In case the GroupMembership found by the `where` argument doesn't exist, create a new GroupMembership with this data.
     */
    create: XOR<GroupMembershipCreateInput, GroupMembershipUncheckedCreateInput>
    /**
     * In case the GroupMembership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMembershipUpdateInput, GroupMembershipUncheckedUpdateInput>
  }

  /**
   * GroupMembership delete
   */
  export type GroupMembershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null
    /**
     * Filter which GroupMembership to delete.
     */
    where: GroupMembershipWhereUniqueInput
  }

  /**
   * GroupMembership deleteMany
   */
  export type GroupMembershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMemberships to delete
     */
    where?: GroupMembershipWhereInput
    /**
     * Limit how many GroupMemberships to delete.
     */
    limit?: number
  }

  /**
   * GroupMembership without action
   */
  export type GroupMembershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembership
     */
    select?: GroupMembershipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembership
     */
    omit?: GroupMembershipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembershipInclude<ExtArgs> | null
  }


  /**
   * Model UserAccess
   */

  export type AggregateUserAccess = {
    _count: UserAccessCountAggregateOutputType | null
    _avg: UserAccessAvgAggregateOutputType | null
    _sum: UserAccessSumAggregateOutputType | null
    _min: UserAccessMinAggregateOutputType | null
    _max: UserAccessMaxAggregateOutputType | null
  }

  export type UserAccessAvgAggregateOutputType = {
    userId: number | null
    noteId: number | null
  }

  export type UserAccessSumAggregateOutputType = {
    userId: number | null
    noteId: number | null
  }

  export type UserAccessMinAggregateOutputType = {
    userId: number | null
    noteId: number | null
  }

  export type UserAccessMaxAggregateOutputType = {
    userId: number | null
    noteId: number | null
  }

  export type UserAccessCountAggregateOutputType = {
    userId: number
    noteId: number
    _all: number
  }


  export type UserAccessAvgAggregateInputType = {
    userId?: true
    noteId?: true
  }

  export type UserAccessSumAggregateInputType = {
    userId?: true
    noteId?: true
  }

  export type UserAccessMinAggregateInputType = {
    userId?: true
    noteId?: true
  }

  export type UserAccessMaxAggregateInputType = {
    userId?: true
    noteId?: true
  }

  export type UserAccessCountAggregateInputType = {
    userId?: true
    noteId?: true
    _all?: true
  }

  export type UserAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAccess to aggregate.
     */
    where?: UserAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAccesses to fetch.
     */
    orderBy?: UserAccessOrderByWithRelationInput | UserAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAccesses
    **/
    _count?: true | UserAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAccessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAccessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAccessMaxAggregateInputType
  }

  export type GetUserAccessAggregateType<T extends UserAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAccess[P]>
      : GetScalarType<T[P], AggregateUserAccess[P]>
  }




  export type UserAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAccessWhereInput
    orderBy?: UserAccessOrderByWithAggregationInput | UserAccessOrderByWithAggregationInput[]
    by: UserAccessScalarFieldEnum[] | UserAccessScalarFieldEnum
    having?: UserAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAccessCountAggregateInputType | true
    _avg?: UserAccessAvgAggregateInputType
    _sum?: UserAccessSumAggregateInputType
    _min?: UserAccessMinAggregateInputType
    _max?: UserAccessMaxAggregateInputType
  }

  export type UserAccessGroupByOutputType = {
    userId: number
    noteId: number
    _count: UserAccessCountAggregateOutputType | null
    _avg: UserAccessAvgAggregateOutputType | null
    _sum: UserAccessSumAggregateOutputType | null
    _min: UserAccessMinAggregateOutputType | null
    _max: UserAccessMaxAggregateOutputType | null
  }

  type GetUserAccessGroupByPayload<T extends UserAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAccessGroupByOutputType[P]>
            : GetScalarType<T[P], UserAccessGroupByOutputType[P]>
        }
      >
    >


  export type UserAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    noteId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAccess"]>

  export type UserAccessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    noteId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAccess"]>

  export type UserAccessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    noteId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAccess"]>

  export type UserAccessSelectScalar = {
    userId?: boolean
    noteId?: boolean
  }

  export type UserAccessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "noteId", ExtArgs["result"]["userAccess"]>
  export type UserAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }
  export type UserAccessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }
  export type UserAccessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }

  export type $UserAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAccess"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      note: Prisma.$NotePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      noteId: number
    }, ExtArgs["result"]["userAccess"]>
    composites: {}
  }

  type UserAccessGetPayload<S extends boolean | null | undefined | UserAccessDefaultArgs> = $Result.GetResult<Prisma.$UserAccessPayload, S>

  type UserAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAccessCountAggregateInputType | true
    }

  export interface UserAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAccess'], meta: { name: 'UserAccess' } }
    /**
     * Find zero or one UserAccess that matches the filter.
     * @param {UserAccessFindUniqueArgs} args - Arguments to find a UserAccess
     * @example
     * // Get one UserAccess
     * const userAccess = await prisma.userAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAccessFindUniqueArgs>(args: SelectSubset<T, UserAccessFindUniqueArgs<ExtArgs>>): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAccess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAccessFindUniqueOrThrowArgs} args - Arguments to find a UserAccess
     * @example
     * // Get one UserAccess
     * const userAccess = await prisma.userAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAccessFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessFindFirstArgs} args - Arguments to find a UserAccess
     * @example
     * // Get one UserAccess
     * const userAccess = await prisma.userAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAccessFindFirstArgs>(args?: SelectSubset<T, UserAccessFindFirstArgs<ExtArgs>>): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessFindFirstOrThrowArgs} args - Arguments to find a UserAccess
     * @example
     * // Get one UserAccess
     * const userAccess = await prisma.userAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAccessFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAccesses
     * const userAccesses = await prisma.userAccess.findMany()
     * 
     * // Get first 10 UserAccesses
     * const userAccesses = await prisma.userAccess.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userAccessWithUserIdOnly = await prisma.userAccess.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserAccessFindManyArgs>(args?: SelectSubset<T, UserAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAccess.
     * @param {UserAccessCreateArgs} args - Arguments to create a UserAccess.
     * @example
     * // Create one UserAccess
     * const UserAccess = await prisma.userAccess.create({
     *   data: {
     *     // ... data to create a UserAccess
     *   }
     * })
     * 
     */
    create<T extends UserAccessCreateArgs>(args: SelectSubset<T, UserAccessCreateArgs<ExtArgs>>): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAccesses.
     * @param {UserAccessCreateManyArgs} args - Arguments to create many UserAccesses.
     * @example
     * // Create many UserAccesses
     * const userAccess = await prisma.userAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAccessCreateManyArgs>(args?: SelectSubset<T, UserAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAccesses and returns the data saved in the database.
     * @param {UserAccessCreateManyAndReturnArgs} args - Arguments to create many UserAccesses.
     * @example
     * // Create many UserAccesses
     * const userAccess = await prisma.userAccess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAccesses and only return the `userId`
     * const userAccessWithUserIdOnly = await prisma.userAccess.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAccessCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAccess.
     * @param {UserAccessDeleteArgs} args - Arguments to delete one UserAccess.
     * @example
     * // Delete one UserAccess
     * const UserAccess = await prisma.userAccess.delete({
     *   where: {
     *     // ... filter to delete one UserAccess
     *   }
     * })
     * 
     */
    delete<T extends UserAccessDeleteArgs>(args: SelectSubset<T, UserAccessDeleteArgs<ExtArgs>>): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAccess.
     * @param {UserAccessUpdateArgs} args - Arguments to update one UserAccess.
     * @example
     * // Update one UserAccess
     * const userAccess = await prisma.userAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAccessUpdateArgs>(args: SelectSubset<T, UserAccessUpdateArgs<ExtArgs>>): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAccesses.
     * @param {UserAccessDeleteManyArgs} args - Arguments to filter UserAccesses to delete.
     * @example
     * // Delete a few UserAccesses
     * const { count } = await prisma.userAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAccessDeleteManyArgs>(args?: SelectSubset<T, UserAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAccesses
     * const userAccess = await prisma.userAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAccessUpdateManyArgs>(args: SelectSubset<T, UserAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAccesses and returns the data updated in the database.
     * @param {UserAccessUpdateManyAndReturnArgs} args - Arguments to update many UserAccesses.
     * @example
     * // Update many UserAccesses
     * const userAccess = await prisma.userAccess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAccesses and only return the `userId`
     * const userAccessWithUserIdOnly = await prisma.userAccess.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserAccessUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAccessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAccess.
     * @param {UserAccessUpsertArgs} args - Arguments to update or create a UserAccess.
     * @example
     * // Update or create a UserAccess
     * const userAccess = await prisma.userAccess.upsert({
     *   create: {
     *     // ... data to create a UserAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAccess we want to update
     *   }
     * })
     */
    upsert<T extends UserAccessUpsertArgs>(args: SelectSubset<T, UserAccessUpsertArgs<ExtArgs>>): Prisma__UserAccessClient<$Result.GetResult<Prisma.$UserAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessCountArgs} args - Arguments to filter UserAccesses to count.
     * @example
     * // Count the number of UserAccesses
     * const count = await prisma.userAccess.count({
     *   where: {
     *     // ... the filter for the UserAccesses we want to count
     *   }
     * })
    **/
    count<T extends UserAccessCountArgs>(
      args?: Subset<T, UserAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAccessAggregateArgs>(args: Subset<T, UserAccessAggregateArgs>): Prisma.PrismaPromise<GetUserAccessAggregateType<T>>

    /**
     * Group by UserAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAccessGroupByArgs['orderBy'] }
        : { orderBy?: UserAccessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAccess model
   */
  readonly fields: UserAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    note<T extends NoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NoteDefaultArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserAccess model
   */
  interface UserAccessFieldRefs {
    readonly userId: FieldRef<"UserAccess", 'Int'>
    readonly noteId: FieldRef<"UserAccess", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserAccess findUnique
   */
  export type UserAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserAccess to fetch.
     */
    where: UserAccessWhereUniqueInput
  }

  /**
   * UserAccess findUniqueOrThrow
   */
  export type UserAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserAccess to fetch.
     */
    where: UserAccessWhereUniqueInput
  }

  /**
   * UserAccess findFirst
   */
  export type UserAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserAccess to fetch.
     */
    where?: UserAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAccesses to fetch.
     */
    orderBy?: UserAccessOrderByWithRelationInput | UserAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAccesses.
     */
    cursor?: UserAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAccesses.
     */
    distinct?: UserAccessScalarFieldEnum | UserAccessScalarFieldEnum[]
  }

  /**
   * UserAccess findFirstOrThrow
   */
  export type UserAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserAccess to fetch.
     */
    where?: UserAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAccesses to fetch.
     */
    orderBy?: UserAccessOrderByWithRelationInput | UserAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAccesses.
     */
    cursor?: UserAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAccesses.
     */
    distinct?: UserAccessScalarFieldEnum | UserAccessScalarFieldEnum[]
  }

  /**
   * UserAccess findMany
   */
  export type UserAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserAccesses to fetch.
     */
    where?: UserAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAccesses to fetch.
     */
    orderBy?: UserAccessOrderByWithRelationInput | UserAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAccesses.
     */
    cursor?: UserAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAccesses.
     */
    distinct?: UserAccessScalarFieldEnum | UserAccessScalarFieldEnum[]
  }

  /**
   * UserAccess create
   */
  export type UserAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAccess.
     */
    data: XOR<UserAccessCreateInput, UserAccessUncheckedCreateInput>
  }

  /**
   * UserAccess createMany
   */
  export type UserAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAccesses.
     */
    data: UserAccessCreateManyInput | UserAccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAccess createManyAndReturn
   */
  export type UserAccessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
    /**
     * The data used to create many UserAccesses.
     */
    data: UserAccessCreateManyInput | UserAccessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAccess update
   */
  export type UserAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAccess.
     */
    data: XOR<UserAccessUpdateInput, UserAccessUncheckedUpdateInput>
    /**
     * Choose, which UserAccess to update.
     */
    where: UserAccessWhereUniqueInput
  }

  /**
   * UserAccess updateMany
   */
  export type UserAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAccesses.
     */
    data: XOR<UserAccessUpdateManyMutationInput, UserAccessUncheckedUpdateManyInput>
    /**
     * Filter which UserAccesses to update
     */
    where?: UserAccessWhereInput
    /**
     * Limit how many UserAccesses to update.
     */
    limit?: number
  }

  /**
   * UserAccess updateManyAndReturn
   */
  export type UserAccessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
    /**
     * The data used to update UserAccesses.
     */
    data: XOR<UserAccessUpdateManyMutationInput, UserAccessUncheckedUpdateManyInput>
    /**
     * Filter which UserAccesses to update
     */
    where?: UserAccessWhereInput
    /**
     * Limit how many UserAccesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAccess upsert
   */
  export type UserAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAccess to update in case it exists.
     */
    where: UserAccessWhereUniqueInput
    /**
     * In case the UserAccess found by the `where` argument doesn't exist, create a new UserAccess with this data.
     */
    create: XOR<UserAccessCreateInput, UserAccessUncheckedCreateInput>
    /**
     * In case the UserAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAccessUpdateInput, UserAccessUncheckedUpdateInput>
  }

  /**
   * UserAccess delete
   */
  export type UserAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessInclude<ExtArgs> | null
    /**
     * Filter which UserAccess to delete.
     */
    where: UserAccessWhereUniqueInput
  }

  /**
   * UserAccess deleteMany
   */
  export type UserAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAccesses to delete
     */
    where?: UserAccessWhereInput
    /**
     * Limit how many UserAccesses to delete.
     */
    limit?: number
  }

  /**
   * UserAccess without action
   */
  export type UserAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAccess
     */
    select?: UserAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAccess
     */
    omit?: UserAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAccessInclude<ExtArgs> | null
  }


  /**
   * Model GroupAccess
   */

  export type AggregateGroupAccess = {
    _count: GroupAccessCountAggregateOutputType | null
    _avg: GroupAccessAvgAggregateOutputType | null
    _sum: GroupAccessSumAggregateOutputType | null
    _min: GroupAccessMinAggregateOutputType | null
    _max: GroupAccessMaxAggregateOutputType | null
  }

  export type GroupAccessAvgAggregateOutputType = {
    groupId: number | null
    noteId: number | null
  }

  export type GroupAccessSumAggregateOutputType = {
    groupId: number | null
    noteId: number | null
  }

  export type GroupAccessMinAggregateOutputType = {
    groupId: number | null
    noteId: number | null
  }

  export type GroupAccessMaxAggregateOutputType = {
    groupId: number | null
    noteId: number | null
  }

  export type GroupAccessCountAggregateOutputType = {
    groupId: number
    noteId: number
    _all: number
  }


  export type GroupAccessAvgAggregateInputType = {
    groupId?: true
    noteId?: true
  }

  export type GroupAccessSumAggregateInputType = {
    groupId?: true
    noteId?: true
  }

  export type GroupAccessMinAggregateInputType = {
    groupId?: true
    noteId?: true
  }

  export type GroupAccessMaxAggregateInputType = {
    groupId?: true
    noteId?: true
  }

  export type GroupAccessCountAggregateInputType = {
    groupId?: true
    noteId?: true
    _all?: true
  }

  export type GroupAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupAccess to aggregate.
     */
    where?: GroupAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupAccesses to fetch.
     */
    orderBy?: GroupAccessOrderByWithRelationInput | GroupAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupAccesses
    **/
    _count?: true | GroupAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAccessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupAccessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupAccessMaxAggregateInputType
  }

  export type GetGroupAccessAggregateType<T extends GroupAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupAccess[P]>
      : GetScalarType<T[P], AggregateGroupAccess[P]>
  }




  export type GroupAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupAccessWhereInput
    orderBy?: GroupAccessOrderByWithAggregationInput | GroupAccessOrderByWithAggregationInput[]
    by: GroupAccessScalarFieldEnum[] | GroupAccessScalarFieldEnum
    having?: GroupAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupAccessCountAggregateInputType | true
    _avg?: GroupAccessAvgAggregateInputType
    _sum?: GroupAccessSumAggregateInputType
    _min?: GroupAccessMinAggregateInputType
    _max?: GroupAccessMaxAggregateInputType
  }

  export type GroupAccessGroupByOutputType = {
    groupId: number
    noteId: number
    _count: GroupAccessCountAggregateOutputType | null
    _avg: GroupAccessAvgAggregateOutputType | null
    _sum: GroupAccessSumAggregateOutputType | null
    _min: GroupAccessMinAggregateOutputType | null
    _max: GroupAccessMaxAggregateOutputType | null
  }

  type GetGroupAccessGroupByPayload<T extends GroupAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupAccessGroupByOutputType[P]>
            : GetScalarType<T[P], GroupAccessGroupByOutputType[P]>
        }
      >
    >


  export type GroupAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    groupId?: boolean
    noteId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupAccess"]>

  export type GroupAccessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    groupId?: boolean
    noteId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupAccess"]>

  export type GroupAccessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    groupId?: boolean
    noteId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupAccess"]>

  export type GroupAccessSelectScalar = {
    groupId?: boolean
    noteId?: boolean
  }

  export type GroupAccessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"groupId" | "noteId", ExtArgs["result"]["groupAccess"]>
  export type GroupAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }
  export type GroupAccessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }
  export type GroupAccessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    note?: boolean | NoteDefaultArgs<ExtArgs>
  }

  export type $GroupAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupAccess"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      note: Prisma.$NotePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      groupId: number
      noteId: number
    }, ExtArgs["result"]["groupAccess"]>
    composites: {}
  }

  type GroupAccessGetPayload<S extends boolean | null | undefined | GroupAccessDefaultArgs> = $Result.GetResult<Prisma.$GroupAccessPayload, S>

  type GroupAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupAccessCountAggregateInputType | true
    }

  export interface GroupAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupAccess'], meta: { name: 'GroupAccess' } }
    /**
     * Find zero or one GroupAccess that matches the filter.
     * @param {GroupAccessFindUniqueArgs} args - Arguments to find a GroupAccess
     * @example
     * // Get one GroupAccess
     * const groupAccess = await prisma.groupAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupAccessFindUniqueArgs>(args: SelectSubset<T, GroupAccessFindUniqueArgs<ExtArgs>>): Prisma__GroupAccessClient<$Result.GetResult<Prisma.$GroupAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupAccess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupAccessFindUniqueOrThrowArgs} args - Arguments to find a GroupAccess
     * @example
     * // Get one GroupAccess
     * const groupAccess = await prisma.groupAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupAccessFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupAccessClient<$Result.GetResult<Prisma.$GroupAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAccessFindFirstArgs} args - Arguments to find a GroupAccess
     * @example
     * // Get one GroupAccess
     * const groupAccess = await prisma.groupAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupAccessFindFirstArgs>(args?: SelectSubset<T, GroupAccessFindFirstArgs<ExtArgs>>): Prisma__GroupAccessClient<$Result.GetResult<Prisma.$GroupAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAccessFindFirstOrThrowArgs} args - Arguments to find a GroupAccess
     * @example
     * // Get one GroupAccess
     * const groupAccess = await prisma.groupAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupAccessFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupAccessClient<$Result.GetResult<Prisma.$GroupAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupAccesses
     * const groupAccesses = await prisma.groupAccess.findMany()
     * 
     * // Get first 10 GroupAccesses
     * const groupAccesses = await prisma.groupAccess.findMany({ take: 10 })
     * 
     * // Only select the `groupId`
     * const groupAccessWithGroupIdOnly = await prisma.groupAccess.findMany({ select: { groupId: true } })
     * 
     */
    findMany<T extends GroupAccessFindManyArgs>(args?: SelectSubset<T, GroupAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupAccess.
     * @param {GroupAccessCreateArgs} args - Arguments to create a GroupAccess.
     * @example
     * // Create one GroupAccess
     * const GroupAccess = await prisma.groupAccess.create({
     *   data: {
     *     // ... data to create a GroupAccess
     *   }
     * })
     * 
     */
    create<T extends GroupAccessCreateArgs>(args: SelectSubset<T, GroupAccessCreateArgs<ExtArgs>>): Prisma__GroupAccessClient<$Result.GetResult<Prisma.$GroupAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupAccesses.
     * @param {GroupAccessCreateManyArgs} args - Arguments to create many GroupAccesses.
     * @example
     * // Create many GroupAccesses
     * const groupAccess = await prisma.groupAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupAccessCreateManyArgs>(args?: SelectSubset<T, GroupAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupAccesses and returns the data saved in the database.
     * @param {GroupAccessCreateManyAndReturnArgs} args - Arguments to create many GroupAccesses.
     * @example
     * // Create many GroupAccesses
     * const groupAccess = await prisma.groupAccess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupAccesses and only return the `groupId`
     * const groupAccessWithGroupIdOnly = await prisma.groupAccess.createManyAndReturn({
     *   select: { groupId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupAccessCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupAccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupAccessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupAccess.
     * @param {GroupAccessDeleteArgs} args - Arguments to delete one GroupAccess.
     * @example
     * // Delete one GroupAccess
     * const GroupAccess = await prisma.groupAccess.delete({
     *   where: {
     *     // ... filter to delete one GroupAccess
     *   }
     * })
     * 
     */
    delete<T extends GroupAccessDeleteArgs>(args: SelectSubset<T, GroupAccessDeleteArgs<ExtArgs>>): Prisma__GroupAccessClient<$Result.GetResult<Prisma.$GroupAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupAccess.
     * @param {GroupAccessUpdateArgs} args - Arguments to update one GroupAccess.
     * @example
     * // Update one GroupAccess
     * const groupAccess = await prisma.groupAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupAccessUpdateArgs>(args: SelectSubset<T, GroupAccessUpdateArgs<ExtArgs>>): Prisma__GroupAccessClient<$Result.GetResult<Prisma.$GroupAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupAccesses.
     * @param {GroupAccessDeleteManyArgs} args - Arguments to filter GroupAccesses to delete.
     * @example
     * // Delete a few GroupAccesses
     * const { count } = await prisma.groupAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupAccessDeleteManyArgs>(args?: SelectSubset<T, GroupAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupAccesses
     * const groupAccess = await prisma.groupAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupAccessUpdateManyArgs>(args: SelectSubset<T, GroupAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupAccesses and returns the data updated in the database.
     * @param {GroupAccessUpdateManyAndReturnArgs} args - Arguments to update many GroupAccesses.
     * @example
     * // Update many GroupAccesses
     * const groupAccess = await prisma.groupAccess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupAccesses and only return the `groupId`
     * const groupAccessWithGroupIdOnly = await prisma.groupAccess.updateManyAndReturn({
     *   select: { groupId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupAccessUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupAccessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupAccessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupAccess.
     * @param {GroupAccessUpsertArgs} args - Arguments to update or create a GroupAccess.
     * @example
     * // Update or create a GroupAccess
     * const groupAccess = await prisma.groupAccess.upsert({
     *   create: {
     *     // ... data to create a GroupAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupAccess we want to update
     *   }
     * })
     */
    upsert<T extends GroupAccessUpsertArgs>(args: SelectSubset<T, GroupAccessUpsertArgs<ExtArgs>>): Prisma__GroupAccessClient<$Result.GetResult<Prisma.$GroupAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAccessCountArgs} args - Arguments to filter GroupAccesses to count.
     * @example
     * // Count the number of GroupAccesses
     * const count = await prisma.groupAccess.count({
     *   where: {
     *     // ... the filter for the GroupAccesses we want to count
     *   }
     * })
    **/
    count<T extends GroupAccessCountArgs>(
      args?: Subset<T, GroupAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAccessAggregateArgs>(args: Subset<T, GroupAccessAggregateArgs>): Prisma.PrismaPromise<GetGroupAccessAggregateType<T>>

    /**
     * Group by GroupAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAccessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupAccessGroupByArgs['orderBy'] }
        : { orderBy?: GroupAccessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupAccess model
   */
  readonly fields: GroupAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    note<T extends NoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NoteDefaultArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroupAccess model
   */
  interface GroupAccessFieldRefs {
    readonly groupId: FieldRef<"GroupAccess", 'Int'>
    readonly noteId: FieldRef<"GroupAccess", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GroupAccess findUnique
   */
  export type GroupAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAccess
     */
    select?: GroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAccess
     */
    omit?: GroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAccessInclude<ExtArgs> | null
    /**
     * Filter, which GroupAccess to fetch.
     */
    where: GroupAccessWhereUniqueInput
  }

  /**
   * GroupAccess findUniqueOrThrow
   */
  export type GroupAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAccess
     */
    select?: GroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAccess
     */
    omit?: GroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAccessInclude<ExtArgs> | null
    /**
     * Filter, which GroupAccess to fetch.
     */
    where: GroupAccessWhereUniqueInput
  }

  /**
   * GroupAccess findFirst
   */
  export type GroupAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAccess
     */
    select?: GroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAccess
     */
    omit?: GroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAccessInclude<ExtArgs> | null
    /**
     * Filter, which GroupAccess to fetch.
     */
    where?: GroupAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupAccesses to fetch.
     */
    orderBy?: GroupAccessOrderByWithRelationInput | GroupAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupAccesses.
     */
    cursor?: GroupAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupAccesses.
     */
    distinct?: GroupAccessScalarFieldEnum | GroupAccessScalarFieldEnum[]
  }

  /**
   * GroupAccess findFirstOrThrow
   */
  export type GroupAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAccess
     */
    select?: GroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAccess
     */
    omit?: GroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAccessInclude<ExtArgs> | null
    /**
     * Filter, which GroupAccess to fetch.
     */
    where?: GroupAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupAccesses to fetch.
     */
    orderBy?: GroupAccessOrderByWithRelationInput | GroupAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupAccesses.
     */
    cursor?: GroupAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupAccesses.
     */
    distinct?: GroupAccessScalarFieldEnum | GroupAccessScalarFieldEnum[]
  }

  /**
   * GroupAccess findMany
   */
  export type GroupAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAccess
     */
    select?: GroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAccess
     */
    omit?: GroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAccessInclude<ExtArgs> | null
    /**
     * Filter, which GroupAccesses to fetch.
     */
    where?: GroupAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupAccesses to fetch.
     */
    orderBy?: GroupAccessOrderByWithRelationInput | GroupAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupAccesses.
     */
    cursor?: GroupAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupAccesses.
     */
    distinct?: GroupAccessScalarFieldEnum | GroupAccessScalarFieldEnum[]
  }

  /**
   * GroupAccess create
   */
  export type GroupAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAccess
     */
    select?: GroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAccess
     */
    omit?: GroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupAccess.
     */
    data: XOR<GroupAccessCreateInput, GroupAccessUncheckedCreateInput>
  }

  /**
   * GroupAccess createMany
   */
  export type GroupAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupAccesses.
     */
    data: GroupAccessCreateManyInput | GroupAccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupAccess createManyAndReturn
   */
  export type GroupAccessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAccess
     */
    select?: GroupAccessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAccess
     */
    omit?: GroupAccessOmit<ExtArgs> | null
    /**
     * The data used to create many GroupAccesses.
     */
    data: GroupAccessCreateManyInput | GroupAccessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAccessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupAccess update
   */
  export type GroupAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAccess
     */
    select?: GroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAccess
     */
    omit?: GroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupAccess.
     */
    data: XOR<GroupAccessUpdateInput, GroupAccessUncheckedUpdateInput>
    /**
     * Choose, which GroupAccess to update.
     */
    where: GroupAccessWhereUniqueInput
  }

  /**
   * GroupAccess updateMany
   */
  export type GroupAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupAccesses.
     */
    data: XOR<GroupAccessUpdateManyMutationInput, GroupAccessUncheckedUpdateManyInput>
    /**
     * Filter which GroupAccesses to update
     */
    where?: GroupAccessWhereInput
    /**
     * Limit how many GroupAccesses to update.
     */
    limit?: number
  }

  /**
   * GroupAccess updateManyAndReturn
   */
  export type GroupAccessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAccess
     */
    select?: GroupAccessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAccess
     */
    omit?: GroupAccessOmit<ExtArgs> | null
    /**
     * The data used to update GroupAccesses.
     */
    data: XOR<GroupAccessUpdateManyMutationInput, GroupAccessUncheckedUpdateManyInput>
    /**
     * Filter which GroupAccesses to update
     */
    where?: GroupAccessWhereInput
    /**
     * Limit how many GroupAccesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAccessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupAccess upsert
   */
  export type GroupAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAccess
     */
    select?: GroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAccess
     */
    omit?: GroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupAccess to update in case it exists.
     */
    where: GroupAccessWhereUniqueInput
    /**
     * In case the GroupAccess found by the `where` argument doesn't exist, create a new GroupAccess with this data.
     */
    create: XOR<GroupAccessCreateInput, GroupAccessUncheckedCreateInput>
    /**
     * In case the GroupAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupAccessUpdateInput, GroupAccessUncheckedUpdateInput>
  }

  /**
   * GroupAccess delete
   */
  export type GroupAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAccess
     */
    select?: GroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAccess
     */
    omit?: GroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAccessInclude<ExtArgs> | null
    /**
     * Filter which GroupAccess to delete.
     */
    where: GroupAccessWhereUniqueInput
  }

  /**
   * GroupAccess deleteMany
   */
  export type GroupAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupAccesses to delete
     */
    where?: GroupAccessWhereInput
    /**
     * Limit how many GroupAccesses to delete.
     */
    limit?: number
  }

  /**
   * GroupAccess without action
   */
  export type GroupAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupAccess
     */
    select?: GroupAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupAccess
     */
    omit?: GroupAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupAccessInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    username: 'username',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    noteId: 'noteId',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authorId: 'authorId'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    groupId: 'groupId',
    ownerId: 'ownerId'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const GroupMembershipScalarFieldEnum: {
    userId: 'userId',
    groupId: 'groupId'
  };

  export type GroupMembershipScalarFieldEnum = (typeof GroupMembershipScalarFieldEnum)[keyof typeof GroupMembershipScalarFieldEnum]


  export const UserAccessScalarFieldEnum: {
    userId: 'userId',
    noteId: 'noteId'
  };

  export type UserAccessScalarFieldEnum = (typeof UserAccessScalarFieldEnum)[keyof typeof UserAccessScalarFieldEnum]


  export const GroupAccessScalarFieldEnum: {
    groupId: 'groupId',
    noteId: 'noteId'
  };

  export type GroupAccessScalarFieldEnum = (typeof GroupAccessScalarFieldEnum)[keyof typeof GroupAccessScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    notes?: NoteListRelationFilter
    ownedGroups?: GroupListRelationFilter
    memberships?: GroupMembershipListRelationFilter
    userAccesses?: UserAccessListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    notes?: NoteOrderByRelationAggregateInput
    ownedGroups?: GroupOrderByRelationAggregateInput
    memberships?: GroupMembershipOrderByRelationAggregateInput
    userAccesses?: UserAccessOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    notes?: NoteListRelationFilter
    ownedGroups?: GroupListRelationFilter
    memberships?: GroupMembershipListRelationFilter
    userAccesses?: UserAccessListRelationFilter
  }, "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    noteId?: IntFilter<"Note"> | number
    title?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    authorId?: IntFilter<"Note"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    groupAccesses?: GroupAccessListRelationFilter
    userAccesses?: UserAccessListRelationFilter
  }

  export type NoteOrderByWithRelationInput = {
    noteId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    author?: UserOrderByWithRelationInput
    groupAccesses?: GroupAccessOrderByRelationAggregateInput
    userAccesses?: UserAccessOrderByRelationAggregateInput
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    noteId?: number
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    title?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    authorId?: IntFilter<"Note"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    groupAccesses?: GroupAccessListRelationFilter
    userAccesses?: UserAccessListRelationFilter
  }, "noteId">

  export type NoteOrderByWithAggregationInput = {
    noteId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _avg?: NoteAvgOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
    _sum?: NoteSumOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    noteId?: IntWithAggregatesFilter<"Note"> | number
    title?: StringWithAggregatesFilter<"Note"> | string
    content?: StringWithAggregatesFilter<"Note"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    authorId?: IntWithAggregatesFilter<"Note"> | number
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    groupId?: IntFilter<"Group"> | number
    ownerId?: IntFilter<"Group"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    memberships?: GroupMembershipListRelationFilter
    accesses?: GroupAccessListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    groupId?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    memberships?: GroupMembershipOrderByRelationAggregateInput
    accesses?: GroupAccessOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    groupId?: number
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    ownerId?: IntFilter<"Group"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    memberships?: GroupMembershipListRelationFilter
    accesses?: GroupAccessListRelationFilter
  }, "groupId">

  export type GroupOrderByWithAggregationInput = {
    groupId?: SortOrder
    ownerId?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    groupId?: IntWithAggregatesFilter<"Group"> | number
    ownerId?: IntWithAggregatesFilter<"Group"> | number
  }

  export type GroupMembershipWhereInput = {
    AND?: GroupMembershipWhereInput | GroupMembershipWhereInput[]
    OR?: GroupMembershipWhereInput[]
    NOT?: GroupMembershipWhereInput | GroupMembershipWhereInput[]
    userId?: IntFilter<"GroupMembership"> | number
    groupId?: IntFilter<"GroupMembership"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }

  export type GroupMembershipOrderByWithRelationInput = {
    userId?: SortOrder
    groupId?: SortOrder
    user?: UserOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type GroupMembershipWhereUniqueInput = Prisma.AtLeast<{
    userId_groupId?: GroupMembershipUserIdGroupIdCompoundUniqueInput
    AND?: GroupMembershipWhereInput | GroupMembershipWhereInput[]
    OR?: GroupMembershipWhereInput[]
    NOT?: GroupMembershipWhereInput | GroupMembershipWhereInput[]
    userId?: IntFilter<"GroupMembership"> | number
    groupId?: IntFilter<"GroupMembership"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
  }, "userId_groupId">

  export type GroupMembershipOrderByWithAggregationInput = {
    userId?: SortOrder
    groupId?: SortOrder
    _count?: GroupMembershipCountOrderByAggregateInput
    _avg?: GroupMembershipAvgOrderByAggregateInput
    _max?: GroupMembershipMaxOrderByAggregateInput
    _min?: GroupMembershipMinOrderByAggregateInput
    _sum?: GroupMembershipSumOrderByAggregateInput
  }

  export type GroupMembershipScalarWhereWithAggregatesInput = {
    AND?: GroupMembershipScalarWhereWithAggregatesInput | GroupMembershipScalarWhereWithAggregatesInput[]
    OR?: GroupMembershipScalarWhereWithAggregatesInput[]
    NOT?: GroupMembershipScalarWhereWithAggregatesInput | GroupMembershipScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"GroupMembership"> | number
    groupId?: IntWithAggregatesFilter<"GroupMembership"> | number
  }

  export type UserAccessWhereInput = {
    AND?: UserAccessWhereInput | UserAccessWhereInput[]
    OR?: UserAccessWhereInput[]
    NOT?: UserAccessWhereInput | UserAccessWhereInput[]
    userId?: IntFilter<"UserAccess"> | number
    noteId?: IntFilter<"UserAccess"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
  }

  export type UserAccessOrderByWithRelationInput = {
    userId?: SortOrder
    noteId?: SortOrder
    user?: UserOrderByWithRelationInput
    note?: NoteOrderByWithRelationInput
  }

  export type UserAccessWhereUniqueInput = Prisma.AtLeast<{
    userId_noteId?: UserAccessUserIdNoteIdCompoundUniqueInput
    AND?: UserAccessWhereInput | UserAccessWhereInput[]
    OR?: UserAccessWhereInput[]
    NOT?: UserAccessWhereInput | UserAccessWhereInput[]
    userId?: IntFilter<"UserAccess"> | number
    noteId?: IntFilter<"UserAccess"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
  }, "userId_noteId">

  export type UserAccessOrderByWithAggregationInput = {
    userId?: SortOrder
    noteId?: SortOrder
    _count?: UserAccessCountOrderByAggregateInput
    _avg?: UserAccessAvgOrderByAggregateInput
    _max?: UserAccessMaxOrderByAggregateInput
    _min?: UserAccessMinOrderByAggregateInput
    _sum?: UserAccessSumOrderByAggregateInput
  }

  export type UserAccessScalarWhereWithAggregatesInput = {
    AND?: UserAccessScalarWhereWithAggregatesInput | UserAccessScalarWhereWithAggregatesInput[]
    OR?: UserAccessScalarWhereWithAggregatesInput[]
    NOT?: UserAccessScalarWhereWithAggregatesInput | UserAccessScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UserAccess"> | number
    noteId?: IntWithAggregatesFilter<"UserAccess"> | number
  }

  export type GroupAccessWhereInput = {
    AND?: GroupAccessWhereInput | GroupAccessWhereInput[]
    OR?: GroupAccessWhereInput[]
    NOT?: GroupAccessWhereInput | GroupAccessWhereInput[]
    groupId?: IntFilter<"GroupAccess"> | number
    noteId?: IntFilter<"GroupAccess"> | number
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
  }

  export type GroupAccessOrderByWithRelationInput = {
    groupId?: SortOrder
    noteId?: SortOrder
    group?: GroupOrderByWithRelationInput
    note?: NoteOrderByWithRelationInput
  }

  export type GroupAccessWhereUniqueInput = Prisma.AtLeast<{
    groupId_noteId?: GroupAccessGroupIdNoteIdCompoundUniqueInput
    AND?: GroupAccessWhereInput | GroupAccessWhereInput[]
    OR?: GroupAccessWhereInput[]
    NOT?: GroupAccessWhereInput | GroupAccessWhereInput[]
    groupId?: IntFilter<"GroupAccess"> | number
    noteId?: IntFilter<"GroupAccess"> | number
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
  }, "groupId_noteId">

  export type GroupAccessOrderByWithAggregationInput = {
    groupId?: SortOrder
    noteId?: SortOrder
    _count?: GroupAccessCountOrderByAggregateInput
    _avg?: GroupAccessAvgOrderByAggregateInput
    _max?: GroupAccessMaxOrderByAggregateInput
    _min?: GroupAccessMinOrderByAggregateInput
    _sum?: GroupAccessSumOrderByAggregateInput
  }

  export type GroupAccessScalarWhereWithAggregatesInput = {
    AND?: GroupAccessScalarWhereWithAggregatesInput | GroupAccessScalarWhereWithAggregatesInput[]
    OR?: GroupAccessScalarWhereWithAggregatesInput[]
    NOT?: GroupAccessScalarWhereWithAggregatesInput | GroupAccessScalarWhereWithAggregatesInput[]
    groupId?: IntWithAggregatesFilter<"GroupAccess"> | number
    noteId?: IntWithAggregatesFilter<"GroupAccess"> | number
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    notes?: NoteCreateNestedManyWithoutAuthorInput
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    memberships?: GroupMembershipCreateNestedManyWithoutUserInput
    userAccesses?: UserAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: number
    username: string
    email: string
    password: string
    notes?: NoteUncheckedCreateNestedManyWithoutAuthorInput
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: GroupMembershipUncheckedCreateNestedManyWithoutUserInput
    userAccesses?: UserAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    notes?: NoteUpdateManyWithoutAuthorNestedInput
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    memberships?: GroupMembershipUpdateManyWithoutUserNestedInput
    userAccesses?: UserAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    notes?: NoteUncheckedUpdateManyWithoutAuthorNestedInput
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: GroupMembershipUncheckedUpdateManyWithoutUserNestedInput
    userAccesses?: UserAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: number
    username: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type NoteCreateInput = {
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutNotesInput
    groupAccesses?: GroupAccessCreateNestedManyWithoutNoteInput
    userAccesses?: UserAccessCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateInput = {
    noteId?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: number
    groupAccesses?: GroupAccessUncheckedCreateNestedManyWithoutNoteInput
    userAccesses?: UserAccessUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutNotesNestedInput
    groupAccesses?: GroupAccessUpdateManyWithoutNoteNestedInput
    userAccesses?: UserAccessUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    noteId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    groupAccesses?: GroupAccessUncheckedUpdateManyWithoutNoteNestedInput
    userAccesses?: UserAccessUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type NoteCreateManyInput = {
    noteId?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: number
  }

  export type NoteUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyInput = {
    noteId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupCreateInput = {
    owner: UserCreateNestedOneWithoutOwnedGroupsInput
    memberships?: GroupMembershipCreateNestedManyWithoutGroupInput
    accesses?: GroupAccessCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    groupId?: number
    ownerId: number
    memberships?: GroupMembershipUncheckedCreateNestedManyWithoutGroupInput
    accesses?: GroupAccessUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    owner?: UserUpdateOneRequiredWithoutOwnedGroupsNestedInput
    memberships?: GroupMembershipUpdateManyWithoutGroupNestedInput
    accesses?: GroupAccessUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    groupId?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    memberships?: GroupMembershipUncheckedUpdateManyWithoutGroupNestedInput
    accesses?: GroupAccessUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    groupId?: number
    ownerId: number
  }

  export type GroupUpdateManyMutationInput = {

  }

  export type GroupUncheckedUpdateManyInput = {
    groupId?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupMembershipCreateInput = {
    user: UserCreateNestedOneWithoutMembershipsInput
    group: GroupCreateNestedOneWithoutMembershipsInput
  }

  export type GroupMembershipUncheckedCreateInput = {
    userId: number
    groupId: number
  }

  export type GroupMembershipUpdateInput = {
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    group?: GroupUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type GroupMembershipUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupMembershipCreateManyInput = {
    userId: number
    groupId: number
  }

  export type GroupMembershipUpdateManyMutationInput = {

  }

  export type GroupMembershipUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type UserAccessCreateInput = {
    user: UserCreateNestedOneWithoutUserAccessesInput
    note: NoteCreateNestedOneWithoutUserAccessesInput
  }

  export type UserAccessUncheckedCreateInput = {
    userId: number
    noteId: number
  }

  export type UserAccessUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUserAccessesNestedInput
    note?: NoteUpdateOneRequiredWithoutUserAccessesNestedInput
  }

  export type UserAccessUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    noteId?: IntFieldUpdateOperationsInput | number
  }

  export type UserAccessCreateManyInput = {
    userId: number
    noteId: number
  }

  export type UserAccessUpdateManyMutationInput = {

  }

  export type UserAccessUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    noteId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupAccessCreateInput = {
    group: GroupCreateNestedOneWithoutAccessesInput
    note: NoteCreateNestedOneWithoutGroupAccessesInput
  }

  export type GroupAccessUncheckedCreateInput = {
    groupId: number
    noteId: number
  }

  export type GroupAccessUpdateInput = {
    group?: GroupUpdateOneRequiredWithoutAccessesNestedInput
    note?: NoteUpdateOneRequiredWithoutGroupAccessesNestedInput
  }

  export type GroupAccessUncheckedUpdateInput = {
    groupId?: IntFieldUpdateOperationsInput | number
    noteId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupAccessCreateManyInput = {
    groupId: number
    noteId: number
  }

  export type GroupAccessUpdateManyMutationInput = {

  }

  export type GroupAccessUncheckedUpdateManyInput = {
    groupId?: IntFieldUpdateOperationsInput | number
    noteId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type GroupMembershipListRelationFilter = {
    every?: GroupMembershipWhereInput
    some?: GroupMembershipWhereInput
    none?: GroupMembershipWhereInput
  }

  export type UserAccessListRelationFilter = {
    every?: UserAccessWhereInput
    some?: UserAccessWhereInput
    none?: UserAccessWhereInput
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupMembershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GroupAccessListRelationFilter = {
    every?: GroupAccessWhereInput
    some?: GroupAccessWhereInput
    none?: GroupAccessWhereInput
  }

  export type GroupAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteCountOrderByAggregateInput = {
    noteId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type NoteAvgOrderByAggregateInput = {
    noteId?: SortOrder
    authorId?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    noteId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    noteId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorId?: SortOrder
  }

  export type NoteSumOrderByAggregateInput = {
    noteId?: SortOrder
    authorId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GroupCountOrderByAggregateInput = {
    groupId?: SortOrder
    ownerId?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    groupId?: SortOrder
    ownerId?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    groupId?: SortOrder
    ownerId?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    groupId?: SortOrder
    ownerId?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    groupId?: SortOrder
    ownerId?: SortOrder
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type GroupMembershipUserIdGroupIdCompoundUniqueInput = {
    userId: number
    groupId: number
  }

  export type GroupMembershipCountOrderByAggregateInput = {
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type GroupMembershipAvgOrderByAggregateInput = {
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type GroupMembershipMaxOrderByAggregateInput = {
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type GroupMembershipMinOrderByAggregateInput = {
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type GroupMembershipSumOrderByAggregateInput = {
    userId?: SortOrder
    groupId?: SortOrder
  }

  export type NoteScalarRelationFilter = {
    is?: NoteWhereInput
    isNot?: NoteWhereInput
  }

  export type UserAccessUserIdNoteIdCompoundUniqueInput = {
    userId: number
    noteId: number
  }

  export type UserAccessCountOrderByAggregateInput = {
    userId?: SortOrder
    noteId?: SortOrder
  }

  export type UserAccessAvgOrderByAggregateInput = {
    userId?: SortOrder
    noteId?: SortOrder
  }

  export type UserAccessMaxOrderByAggregateInput = {
    userId?: SortOrder
    noteId?: SortOrder
  }

  export type UserAccessMinOrderByAggregateInput = {
    userId?: SortOrder
    noteId?: SortOrder
  }

  export type UserAccessSumOrderByAggregateInput = {
    userId?: SortOrder
    noteId?: SortOrder
  }

  export type GroupAccessGroupIdNoteIdCompoundUniqueInput = {
    groupId: number
    noteId: number
  }

  export type GroupAccessCountOrderByAggregateInput = {
    groupId?: SortOrder
    noteId?: SortOrder
  }

  export type GroupAccessAvgOrderByAggregateInput = {
    groupId?: SortOrder
    noteId?: SortOrder
  }

  export type GroupAccessMaxOrderByAggregateInput = {
    groupId?: SortOrder
    noteId?: SortOrder
  }

  export type GroupAccessMinOrderByAggregateInput = {
    groupId?: SortOrder
    noteId?: SortOrder
  }

  export type GroupAccessSumOrderByAggregateInput = {
    groupId?: SortOrder
    noteId?: SortOrder
  }

  export type NoteCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NoteCreateWithoutAuthorInput, NoteUncheckedCreateWithoutAuthorInput> | NoteCreateWithoutAuthorInput[] | NoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutAuthorInput | NoteCreateOrConnectWithoutAuthorInput[]
    createMany?: NoteCreateManyAuthorInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type GroupCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput> | GroupCreateWithoutOwnerInput[] | GroupUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutOwnerInput | GroupCreateOrConnectWithoutOwnerInput[]
    createMany?: GroupCreateManyOwnerInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type GroupMembershipCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMembershipCreateWithoutUserInput, GroupMembershipUncheckedCreateWithoutUserInput> | GroupMembershipCreateWithoutUserInput[] | GroupMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMembershipCreateOrConnectWithoutUserInput | GroupMembershipCreateOrConnectWithoutUserInput[]
    createMany?: GroupMembershipCreateManyUserInputEnvelope
    connect?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[]
  }

  export type UserAccessCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAccessCreateWithoutUserInput, UserAccessUncheckedCreateWithoutUserInput> | UserAccessCreateWithoutUserInput[] | UserAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAccessCreateOrConnectWithoutUserInput | UserAccessCreateOrConnectWithoutUserInput[]
    createMany?: UserAccessCreateManyUserInputEnvelope
    connect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NoteCreateWithoutAuthorInput, NoteUncheckedCreateWithoutAuthorInput> | NoteCreateWithoutAuthorInput[] | NoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutAuthorInput | NoteCreateOrConnectWithoutAuthorInput[]
    createMany?: NoteCreateManyAuthorInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput> | GroupCreateWithoutOwnerInput[] | GroupUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutOwnerInput | GroupCreateOrConnectWithoutOwnerInput[]
    createMany?: GroupCreateManyOwnerInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type GroupMembershipUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMembershipCreateWithoutUserInput, GroupMembershipUncheckedCreateWithoutUserInput> | GroupMembershipCreateWithoutUserInput[] | GroupMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMembershipCreateOrConnectWithoutUserInput | GroupMembershipCreateOrConnectWithoutUserInput[]
    createMany?: GroupMembershipCreateManyUserInputEnvelope
    connect?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[]
  }

  export type UserAccessUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAccessCreateWithoutUserInput, UserAccessUncheckedCreateWithoutUserInput> | UserAccessCreateWithoutUserInput[] | UserAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAccessCreateOrConnectWithoutUserInput | UserAccessCreateOrConnectWithoutUserInput[]
    createMany?: UserAccessCreateManyUserInputEnvelope
    connect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NoteUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NoteCreateWithoutAuthorInput, NoteUncheckedCreateWithoutAuthorInput> | NoteCreateWithoutAuthorInput[] | NoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutAuthorInput | NoteCreateOrConnectWithoutAuthorInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutAuthorInput | NoteUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NoteCreateManyAuthorInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutAuthorInput | NoteUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutAuthorInput | NoteUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type GroupUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput> | GroupCreateWithoutOwnerInput[] | GroupUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutOwnerInput | GroupCreateOrConnectWithoutOwnerInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutOwnerInput | GroupUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: GroupCreateManyOwnerInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutOwnerInput | GroupUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutOwnerInput | GroupUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupMembershipUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMembershipCreateWithoutUserInput, GroupMembershipUncheckedCreateWithoutUserInput> | GroupMembershipCreateWithoutUserInput[] | GroupMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMembershipCreateOrConnectWithoutUserInput | GroupMembershipCreateOrConnectWithoutUserInput[]
    upsert?: GroupMembershipUpsertWithWhereUniqueWithoutUserInput | GroupMembershipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMembershipCreateManyUserInputEnvelope
    set?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[]
    disconnect?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[]
    delete?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[]
    connect?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[]
    update?: GroupMembershipUpdateWithWhereUniqueWithoutUserInput | GroupMembershipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMembershipUpdateManyWithWhereWithoutUserInput | GroupMembershipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMembershipScalarWhereInput | GroupMembershipScalarWhereInput[]
  }

  export type UserAccessUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAccessCreateWithoutUserInput, UserAccessUncheckedCreateWithoutUserInput> | UserAccessCreateWithoutUserInput[] | UserAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAccessCreateOrConnectWithoutUserInput | UserAccessCreateOrConnectWithoutUserInput[]
    upsert?: UserAccessUpsertWithWhereUniqueWithoutUserInput | UserAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAccessCreateManyUserInputEnvelope
    set?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    disconnect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    delete?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    connect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    update?: UserAccessUpdateWithWhereUniqueWithoutUserInput | UserAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAccessUpdateManyWithWhereWithoutUserInput | UserAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAccessScalarWhereInput | UserAccessScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NoteUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NoteCreateWithoutAuthorInput, NoteUncheckedCreateWithoutAuthorInput> | NoteCreateWithoutAuthorInput[] | NoteUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutAuthorInput | NoteCreateOrConnectWithoutAuthorInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutAuthorInput | NoteUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NoteCreateManyAuthorInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutAuthorInput | NoteUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutAuthorInput | NoteUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput> | GroupCreateWithoutOwnerInput[] | GroupUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutOwnerInput | GroupCreateOrConnectWithoutOwnerInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutOwnerInput | GroupUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: GroupCreateManyOwnerInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutOwnerInput | GroupUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutOwnerInput | GroupUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupMembershipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMembershipCreateWithoutUserInput, GroupMembershipUncheckedCreateWithoutUserInput> | GroupMembershipCreateWithoutUserInput[] | GroupMembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMembershipCreateOrConnectWithoutUserInput | GroupMembershipCreateOrConnectWithoutUserInput[]
    upsert?: GroupMembershipUpsertWithWhereUniqueWithoutUserInput | GroupMembershipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMembershipCreateManyUserInputEnvelope
    set?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[]
    disconnect?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[]
    delete?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[]
    connect?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[]
    update?: GroupMembershipUpdateWithWhereUniqueWithoutUserInput | GroupMembershipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMembershipUpdateManyWithWhereWithoutUserInput | GroupMembershipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMembershipScalarWhereInput | GroupMembershipScalarWhereInput[]
  }

  export type UserAccessUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAccessCreateWithoutUserInput, UserAccessUncheckedCreateWithoutUserInput> | UserAccessCreateWithoutUserInput[] | UserAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAccessCreateOrConnectWithoutUserInput | UserAccessCreateOrConnectWithoutUserInput[]
    upsert?: UserAccessUpsertWithWhereUniqueWithoutUserInput | UserAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAccessCreateManyUserInputEnvelope
    set?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    disconnect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    delete?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    connect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    update?: UserAccessUpdateWithWhereUniqueWithoutUserInput | UserAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAccessUpdateManyWithWhereWithoutUserInput | UserAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAccessScalarWhereInput | UserAccessScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotesInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    connect?: UserWhereUniqueInput
  }

  export type GroupAccessCreateNestedManyWithoutNoteInput = {
    create?: XOR<GroupAccessCreateWithoutNoteInput, GroupAccessUncheckedCreateWithoutNoteInput> | GroupAccessCreateWithoutNoteInput[] | GroupAccessUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: GroupAccessCreateOrConnectWithoutNoteInput | GroupAccessCreateOrConnectWithoutNoteInput[]
    createMany?: GroupAccessCreateManyNoteInputEnvelope
    connect?: GroupAccessWhereUniqueInput | GroupAccessWhereUniqueInput[]
  }

  export type UserAccessCreateNestedManyWithoutNoteInput = {
    create?: XOR<UserAccessCreateWithoutNoteInput, UserAccessUncheckedCreateWithoutNoteInput> | UserAccessCreateWithoutNoteInput[] | UserAccessUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: UserAccessCreateOrConnectWithoutNoteInput | UserAccessCreateOrConnectWithoutNoteInput[]
    createMany?: UserAccessCreateManyNoteInputEnvelope
    connect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
  }

  export type GroupAccessUncheckedCreateNestedManyWithoutNoteInput = {
    create?: XOR<GroupAccessCreateWithoutNoteInput, GroupAccessUncheckedCreateWithoutNoteInput> | GroupAccessCreateWithoutNoteInput[] | GroupAccessUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: GroupAccessCreateOrConnectWithoutNoteInput | GroupAccessCreateOrConnectWithoutNoteInput[]
    createMany?: GroupAccessCreateManyNoteInputEnvelope
    connect?: GroupAccessWhereUniqueInput | GroupAccessWhereUniqueInput[]
  }

  export type UserAccessUncheckedCreateNestedManyWithoutNoteInput = {
    create?: XOR<UserAccessCreateWithoutNoteInput, UserAccessUncheckedCreateWithoutNoteInput> | UserAccessCreateWithoutNoteInput[] | UserAccessUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: UserAccessCreateOrConnectWithoutNoteInput | UserAccessCreateOrConnectWithoutNoteInput[]
    createMany?: UserAccessCreateManyNoteInputEnvelope
    connect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    upsert?: UserUpsertWithoutNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotesInput, UserUpdateWithoutNotesInput>, UserUncheckedUpdateWithoutNotesInput>
  }

  export type GroupAccessUpdateManyWithoutNoteNestedInput = {
    create?: XOR<GroupAccessCreateWithoutNoteInput, GroupAccessUncheckedCreateWithoutNoteInput> | GroupAccessCreateWithoutNoteInput[] | GroupAccessUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: GroupAccessCreateOrConnectWithoutNoteInput | GroupAccessCreateOrConnectWithoutNoteInput[]
    upsert?: GroupAccessUpsertWithWhereUniqueWithoutNoteInput | GroupAccessUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: GroupAccessCreateManyNoteInputEnvelope
    set?: GroupAccessWhereUniqueInput | GroupAccessWhereUniqueInput[]
    disconnect?: GroupAccessWhereUniqueInput | GroupAccessWhereUniqueInput[]
    delete?: GroupAccessWhereUniqueInput | GroupAccessWhereUniqueInput[]
    connect?: GroupAccessWhereUniqueInput | GroupAccessWhereUniqueInput[]
    update?: GroupAccessUpdateWithWhereUniqueWithoutNoteInput | GroupAccessUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: GroupAccessUpdateManyWithWhereWithoutNoteInput | GroupAccessUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: GroupAccessScalarWhereInput | GroupAccessScalarWhereInput[]
  }

  export type UserAccessUpdateManyWithoutNoteNestedInput = {
    create?: XOR<UserAccessCreateWithoutNoteInput, UserAccessUncheckedCreateWithoutNoteInput> | UserAccessCreateWithoutNoteInput[] | UserAccessUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: UserAccessCreateOrConnectWithoutNoteInput | UserAccessCreateOrConnectWithoutNoteInput[]
    upsert?: UserAccessUpsertWithWhereUniqueWithoutNoteInput | UserAccessUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: UserAccessCreateManyNoteInputEnvelope
    set?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    disconnect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    delete?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    connect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    update?: UserAccessUpdateWithWhereUniqueWithoutNoteInput | UserAccessUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: UserAccessUpdateManyWithWhereWithoutNoteInput | UserAccessUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: UserAccessScalarWhereInput | UserAccessScalarWhereInput[]
  }

  export type GroupAccessUncheckedUpdateManyWithoutNoteNestedInput = {
    create?: XOR<GroupAccessCreateWithoutNoteInput, GroupAccessUncheckedCreateWithoutNoteInput> | GroupAccessCreateWithoutNoteInput[] | GroupAccessUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: GroupAccessCreateOrConnectWithoutNoteInput | GroupAccessCreateOrConnectWithoutNoteInput[]
    upsert?: GroupAccessUpsertWithWhereUniqueWithoutNoteInput | GroupAccessUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: GroupAccessCreateManyNoteInputEnvelope
    set?: GroupAccessWhereUniqueInput | GroupAccessWhereUniqueInput[]
    disconnect?: GroupAccessWhereUniqueInput | GroupAccessWhereUniqueInput[]
    delete?: GroupAccessWhereUniqueInput | GroupAccessWhereUniqueInput[]
    connect?: GroupAccessWhereUniqueInput | GroupAccessWhereUniqueInput[]
    update?: GroupAccessUpdateWithWhereUniqueWithoutNoteInput | GroupAccessUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: GroupAccessUpdateManyWithWhereWithoutNoteInput | GroupAccessUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: GroupAccessScalarWhereInput | GroupAccessScalarWhereInput[]
  }

  export type UserAccessUncheckedUpdateManyWithoutNoteNestedInput = {
    create?: XOR<UserAccessCreateWithoutNoteInput, UserAccessUncheckedCreateWithoutNoteInput> | UserAccessCreateWithoutNoteInput[] | UserAccessUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: UserAccessCreateOrConnectWithoutNoteInput | UserAccessCreateOrConnectWithoutNoteInput[]
    upsert?: UserAccessUpsertWithWhereUniqueWithoutNoteInput | UserAccessUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: UserAccessCreateManyNoteInputEnvelope
    set?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    disconnect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    delete?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    connect?: UserAccessWhereUniqueInput | UserAccessWhereUniqueInput[]
    update?: UserAccessUpdateWithWhereUniqueWithoutNoteInput | UserAccessUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: UserAccessUpdateManyWithWhereWithoutNoteInput | UserAccessUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: UserAccessScalarWhereInput | UserAccessScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnedGroupsInput = {
    create?: XOR<UserCreateWithoutOwnedGroupsInput, UserUncheckedCreateWithoutOwnedGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupMembershipCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMembershipCreateWithoutGroupInput, GroupMembershipUncheckedCreateWithoutGroupInput> | GroupMembershipCreateWithoutGroupInput[] | GroupMembershipUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMembershipCreateOrConnectWithoutGroupInput | GroupMembershipCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMembershipCreateManyGroupInputEnvelope
    connect?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[]
  }

  export type GroupAccessCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupAccessCreateWithoutGroupInput, GroupAccessUncheckedCreateWithoutGroupInput> | GroupAccessCreateWithoutGroupInput[] | GroupAccessUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupAccessCreateOrConnectWithoutGroupInput | GroupAccessCreateOrConnectWithoutGroupInput[]
    createMany?: GroupAccessCreateManyGroupInputEnvelope
    connect?: GroupAccessWhereUniqueInput | GroupAccessWhereUniqueInput[]
  }

  export type GroupMembershipUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMembershipCreateWithoutGroupInput, GroupMembershipUncheckedCreateWithoutGroupInput> | GroupMembershipCreateWithoutGroupInput[] | GroupMembershipUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMembershipCreateOrConnectWithoutGroupInput | GroupMembershipCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMembershipCreateManyGroupInputEnvelope
    connect?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[]
  }

  export type GroupAccessUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupAccessCreateWithoutGroupInput, GroupAccessUncheckedCreateWithoutGroupInput> | GroupAccessCreateWithoutGroupInput[] | GroupAccessUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupAccessCreateOrConnectWithoutGroupInput | GroupAccessCreateOrConnectWithoutGroupInput[]
    createMany?: GroupAccessCreateManyGroupInputEnvelope
    connect?: GroupAccessWhereUniqueInput | GroupAccessWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOwnedGroupsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedGroupsInput, UserUncheckedCreateWithoutOwnedGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedGroupsInput
    upsert?: UserUpsertWithoutOwnedGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedGroupsInput, UserUpdateWithoutOwnedGroupsInput>, UserUncheckedUpdateWithoutOwnedGroupsInput>
  }

  export type GroupMembershipUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMembershipCreateWithoutGroupInput, GroupMembershipUncheckedCreateWithoutGroupInput> | GroupMembershipCreateWithoutGroupInput[] | GroupMembershipUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMembershipCreateOrConnectWithoutGroupInput | GroupMembershipCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMembershipUpsertWithWhereUniqueWithoutGroupInput | GroupMembershipUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMembershipCreateManyGroupInputEnvelope
    set?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[]
    disconnect?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[]
    delete?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[]
    connect?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[]
    update?: GroupMembershipUpdateWithWhereUniqueWithoutGroupInput | GroupMembershipUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMembershipUpdateManyWithWhereWithoutGroupInput | GroupMembershipUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMembershipScalarWhereInput | GroupMembershipScalarWhereInput[]
  }

  export type GroupAccessUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupAccessCreateWithoutGroupInput, GroupAccessUncheckedCreateWithoutGroupInput> | GroupAccessCreateWithoutGroupInput[] | GroupAccessUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupAccessCreateOrConnectWithoutGroupInput | GroupAccessCreateOrConnectWithoutGroupInput[]
    upsert?: GroupAccessUpsertWithWhereUniqueWithoutGroupInput | GroupAccessUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupAccessCreateManyGroupInputEnvelope
    set?: GroupAccessWhereUniqueInput | GroupAccessWhereUniqueInput[]
    disconnect?: GroupAccessWhereUniqueInput | GroupAccessWhereUniqueInput[]
    delete?: GroupAccessWhereUniqueInput | GroupAccessWhereUniqueInput[]
    connect?: GroupAccessWhereUniqueInput | GroupAccessWhereUniqueInput[]
    update?: GroupAccessUpdateWithWhereUniqueWithoutGroupInput | GroupAccessUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupAccessUpdateManyWithWhereWithoutGroupInput | GroupAccessUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupAccessScalarWhereInput | GroupAccessScalarWhereInput[]
  }

  export type GroupMembershipUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMembershipCreateWithoutGroupInput, GroupMembershipUncheckedCreateWithoutGroupInput> | GroupMembershipCreateWithoutGroupInput[] | GroupMembershipUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMembershipCreateOrConnectWithoutGroupInput | GroupMembershipCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMembershipUpsertWithWhereUniqueWithoutGroupInput | GroupMembershipUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMembershipCreateManyGroupInputEnvelope
    set?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[]
    disconnect?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[]
    delete?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[]
    connect?: GroupMembershipWhereUniqueInput | GroupMembershipWhereUniqueInput[]
    update?: GroupMembershipUpdateWithWhereUniqueWithoutGroupInput | GroupMembershipUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMembershipUpdateManyWithWhereWithoutGroupInput | GroupMembershipUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMembershipScalarWhereInput | GroupMembershipScalarWhereInput[]
  }

  export type GroupAccessUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupAccessCreateWithoutGroupInput, GroupAccessUncheckedCreateWithoutGroupInput> | GroupAccessCreateWithoutGroupInput[] | GroupAccessUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupAccessCreateOrConnectWithoutGroupInput | GroupAccessCreateOrConnectWithoutGroupInput[]
    upsert?: GroupAccessUpsertWithWhereUniqueWithoutGroupInput | GroupAccessUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupAccessCreateManyGroupInputEnvelope
    set?: GroupAccessWhereUniqueInput | GroupAccessWhereUniqueInput[]
    disconnect?: GroupAccessWhereUniqueInput | GroupAccessWhereUniqueInput[]
    delete?: GroupAccessWhereUniqueInput | GroupAccessWhereUniqueInput[]
    connect?: GroupAccessWhereUniqueInput | GroupAccessWhereUniqueInput[]
    update?: GroupAccessUpdateWithWhereUniqueWithoutGroupInput | GroupAccessUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupAccessUpdateManyWithWhereWithoutGroupInput | GroupAccessUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupAccessScalarWhereInput | GroupAccessScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<GroupCreateWithoutMembershipsInput, GroupUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembershipsInput
    connect?: GroupWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type GroupUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<GroupCreateWithoutMembershipsInput, GroupUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembershipsInput
    upsert?: GroupUpsertWithoutMembershipsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutMembershipsInput, GroupUpdateWithoutMembershipsInput>, GroupUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserCreateNestedOneWithoutUserAccessesInput = {
    create?: XOR<UserCreateWithoutUserAccessesInput, UserUncheckedCreateWithoutUserAccessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAccessesInput
    connect?: UserWhereUniqueInput
  }

  export type NoteCreateNestedOneWithoutUserAccessesInput = {
    create?: XOR<NoteCreateWithoutUserAccessesInput, NoteUncheckedCreateWithoutUserAccessesInput>
    connectOrCreate?: NoteCreateOrConnectWithoutUserAccessesInput
    connect?: NoteWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserAccessesNestedInput = {
    create?: XOR<UserCreateWithoutUserAccessesInput, UserUncheckedCreateWithoutUserAccessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAccessesInput
    upsert?: UserUpsertWithoutUserAccessesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserAccessesInput, UserUpdateWithoutUserAccessesInput>, UserUncheckedUpdateWithoutUserAccessesInput>
  }

  export type NoteUpdateOneRequiredWithoutUserAccessesNestedInput = {
    create?: XOR<NoteCreateWithoutUserAccessesInput, NoteUncheckedCreateWithoutUserAccessesInput>
    connectOrCreate?: NoteCreateOrConnectWithoutUserAccessesInput
    upsert?: NoteUpsertWithoutUserAccessesInput
    connect?: NoteWhereUniqueInput
    update?: XOR<XOR<NoteUpdateToOneWithWhereWithoutUserAccessesInput, NoteUpdateWithoutUserAccessesInput>, NoteUncheckedUpdateWithoutUserAccessesInput>
  }

  export type GroupCreateNestedOneWithoutAccessesInput = {
    create?: XOR<GroupCreateWithoutAccessesInput, GroupUncheckedCreateWithoutAccessesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutAccessesInput
    connect?: GroupWhereUniqueInput
  }

  export type NoteCreateNestedOneWithoutGroupAccessesInput = {
    create?: XOR<NoteCreateWithoutGroupAccessesInput, NoteUncheckedCreateWithoutGroupAccessesInput>
    connectOrCreate?: NoteCreateOrConnectWithoutGroupAccessesInput
    connect?: NoteWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutAccessesNestedInput = {
    create?: XOR<GroupCreateWithoutAccessesInput, GroupUncheckedCreateWithoutAccessesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutAccessesInput
    upsert?: GroupUpsertWithoutAccessesInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutAccessesInput, GroupUpdateWithoutAccessesInput>, GroupUncheckedUpdateWithoutAccessesInput>
  }

  export type NoteUpdateOneRequiredWithoutGroupAccessesNestedInput = {
    create?: XOR<NoteCreateWithoutGroupAccessesInput, NoteUncheckedCreateWithoutGroupAccessesInput>
    connectOrCreate?: NoteCreateOrConnectWithoutGroupAccessesInput
    upsert?: NoteUpsertWithoutGroupAccessesInput
    connect?: NoteWhereUniqueInput
    update?: XOR<XOR<NoteUpdateToOneWithWhereWithoutGroupAccessesInput, NoteUpdateWithoutGroupAccessesInput>, NoteUncheckedUpdateWithoutGroupAccessesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NoteCreateWithoutAuthorInput = {
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupAccesses?: GroupAccessCreateNestedManyWithoutNoteInput
    userAccesses?: UserAccessCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutAuthorInput = {
    noteId?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groupAccesses?: GroupAccessUncheckedCreateNestedManyWithoutNoteInput
    userAccesses?: UserAccessUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteCreateOrConnectWithoutAuthorInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutAuthorInput, NoteUncheckedCreateWithoutAuthorInput>
  }

  export type NoteCreateManyAuthorInputEnvelope = {
    data: NoteCreateManyAuthorInput | NoteCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type GroupCreateWithoutOwnerInput = {
    memberships?: GroupMembershipCreateNestedManyWithoutGroupInput
    accesses?: GroupAccessCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutOwnerInput = {
    groupId?: number
    memberships?: GroupMembershipUncheckedCreateNestedManyWithoutGroupInput
    accesses?: GroupAccessUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutOwnerInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput>
  }

  export type GroupCreateManyOwnerInputEnvelope = {
    data: GroupCreateManyOwnerInput | GroupCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type GroupMembershipCreateWithoutUserInput = {
    group: GroupCreateNestedOneWithoutMembershipsInput
  }

  export type GroupMembershipUncheckedCreateWithoutUserInput = {
    groupId: number
  }

  export type GroupMembershipCreateOrConnectWithoutUserInput = {
    where: GroupMembershipWhereUniqueInput
    create: XOR<GroupMembershipCreateWithoutUserInput, GroupMembershipUncheckedCreateWithoutUserInput>
  }

  export type GroupMembershipCreateManyUserInputEnvelope = {
    data: GroupMembershipCreateManyUserInput | GroupMembershipCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserAccessCreateWithoutUserInput = {
    note: NoteCreateNestedOneWithoutUserAccessesInput
  }

  export type UserAccessUncheckedCreateWithoutUserInput = {
    noteId: number
  }

  export type UserAccessCreateOrConnectWithoutUserInput = {
    where: UserAccessWhereUniqueInput
    create: XOR<UserAccessCreateWithoutUserInput, UserAccessUncheckedCreateWithoutUserInput>
  }

  export type UserAccessCreateManyUserInputEnvelope = {
    data: UserAccessCreateManyUserInput | UserAccessCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NoteUpsertWithWhereUniqueWithoutAuthorInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutAuthorInput, NoteUncheckedUpdateWithoutAuthorInput>
    create: XOR<NoteCreateWithoutAuthorInput, NoteUncheckedCreateWithoutAuthorInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutAuthorInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutAuthorInput, NoteUncheckedUpdateWithoutAuthorInput>
  }

  export type NoteUpdateManyWithWhereWithoutAuthorInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutAuthorInput>
  }

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[]
    OR?: NoteScalarWhereInput[]
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[]
    noteId?: IntFilter<"Note"> | number
    title?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    authorId?: IntFilter<"Note"> | number
  }

  export type GroupUpsertWithWhereUniqueWithoutOwnerInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutOwnerInput, GroupUncheckedUpdateWithoutOwnerInput>
    create: XOR<GroupCreateWithoutOwnerInput, GroupUncheckedCreateWithoutOwnerInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutOwnerInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutOwnerInput, GroupUncheckedUpdateWithoutOwnerInput>
  }

  export type GroupUpdateManyWithWhereWithoutOwnerInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutOwnerInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    groupId?: IntFilter<"Group"> | number
    ownerId?: IntFilter<"Group"> | number
  }

  export type GroupMembershipUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupMembershipWhereUniqueInput
    update: XOR<GroupMembershipUpdateWithoutUserInput, GroupMembershipUncheckedUpdateWithoutUserInput>
    create: XOR<GroupMembershipCreateWithoutUserInput, GroupMembershipUncheckedCreateWithoutUserInput>
  }

  export type GroupMembershipUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupMembershipWhereUniqueInput
    data: XOR<GroupMembershipUpdateWithoutUserInput, GroupMembershipUncheckedUpdateWithoutUserInput>
  }

  export type GroupMembershipUpdateManyWithWhereWithoutUserInput = {
    where: GroupMembershipScalarWhereInput
    data: XOR<GroupMembershipUpdateManyMutationInput, GroupMembershipUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupMembershipScalarWhereInput = {
    AND?: GroupMembershipScalarWhereInput | GroupMembershipScalarWhereInput[]
    OR?: GroupMembershipScalarWhereInput[]
    NOT?: GroupMembershipScalarWhereInput | GroupMembershipScalarWhereInput[]
    userId?: IntFilter<"GroupMembership"> | number
    groupId?: IntFilter<"GroupMembership"> | number
  }

  export type UserAccessUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAccessWhereUniqueInput
    update: XOR<UserAccessUpdateWithoutUserInput, UserAccessUncheckedUpdateWithoutUserInput>
    create: XOR<UserAccessCreateWithoutUserInput, UserAccessUncheckedCreateWithoutUserInput>
  }

  export type UserAccessUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAccessWhereUniqueInput
    data: XOR<UserAccessUpdateWithoutUserInput, UserAccessUncheckedUpdateWithoutUserInput>
  }

  export type UserAccessUpdateManyWithWhereWithoutUserInput = {
    where: UserAccessScalarWhereInput
    data: XOR<UserAccessUpdateManyMutationInput, UserAccessUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAccessScalarWhereInput = {
    AND?: UserAccessScalarWhereInput | UserAccessScalarWhereInput[]
    OR?: UserAccessScalarWhereInput[]
    NOT?: UserAccessScalarWhereInput | UserAccessScalarWhereInput[]
    userId?: IntFilter<"UserAccess"> | number
    noteId?: IntFilter<"UserAccess"> | number
  }

  export type UserCreateWithoutNotesInput = {
    username: string
    email: string
    password: string
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    memberships?: GroupMembershipCreateNestedManyWithoutUserInput
    userAccesses?: UserAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotesInput = {
    userId?: number
    username: string
    email: string
    password: string
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: GroupMembershipUncheckedCreateNestedManyWithoutUserInput
    userAccesses?: UserAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
  }

  export type GroupAccessCreateWithoutNoteInput = {
    group: GroupCreateNestedOneWithoutAccessesInput
  }

  export type GroupAccessUncheckedCreateWithoutNoteInput = {
    groupId: number
  }

  export type GroupAccessCreateOrConnectWithoutNoteInput = {
    where: GroupAccessWhereUniqueInput
    create: XOR<GroupAccessCreateWithoutNoteInput, GroupAccessUncheckedCreateWithoutNoteInput>
  }

  export type GroupAccessCreateManyNoteInputEnvelope = {
    data: GroupAccessCreateManyNoteInput | GroupAccessCreateManyNoteInput[]
    skipDuplicates?: boolean
  }

  export type UserAccessCreateWithoutNoteInput = {
    user: UserCreateNestedOneWithoutUserAccessesInput
  }

  export type UserAccessUncheckedCreateWithoutNoteInput = {
    userId: number
  }

  export type UserAccessCreateOrConnectWithoutNoteInput = {
    where: UserAccessWhereUniqueInput
    create: XOR<UserAccessCreateWithoutNoteInput, UserAccessUncheckedCreateWithoutNoteInput>
  }

  export type UserAccessCreateManyNoteInputEnvelope = {
    data: UserAccessCreateManyNoteInput | UserAccessCreateManyNoteInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutNotesInput = {
    update: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateWithoutNotesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    memberships?: GroupMembershipUpdateManyWithoutUserNestedInput
    userAccesses?: UserAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: GroupMembershipUncheckedUpdateManyWithoutUserNestedInput
    userAccesses?: UserAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupAccessUpsertWithWhereUniqueWithoutNoteInput = {
    where: GroupAccessWhereUniqueInput
    update: XOR<GroupAccessUpdateWithoutNoteInput, GroupAccessUncheckedUpdateWithoutNoteInput>
    create: XOR<GroupAccessCreateWithoutNoteInput, GroupAccessUncheckedCreateWithoutNoteInput>
  }

  export type GroupAccessUpdateWithWhereUniqueWithoutNoteInput = {
    where: GroupAccessWhereUniqueInput
    data: XOR<GroupAccessUpdateWithoutNoteInput, GroupAccessUncheckedUpdateWithoutNoteInput>
  }

  export type GroupAccessUpdateManyWithWhereWithoutNoteInput = {
    where: GroupAccessScalarWhereInput
    data: XOR<GroupAccessUpdateManyMutationInput, GroupAccessUncheckedUpdateManyWithoutNoteInput>
  }

  export type GroupAccessScalarWhereInput = {
    AND?: GroupAccessScalarWhereInput | GroupAccessScalarWhereInput[]
    OR?: GroupAccessScalarWhereInput[]
    NOT?: GroupAccessScalarWhereInput | GroupAccessScalarWhereInput[]
    groupId?: IntFilter<"GroupAccess"> | number
    noteId?: IntFilter<"GroupAccess"> | number
  }

  export type UserAccessUpsertWithWhereUniqueWithoutNoteInput = {
    where: UserAccessWhereUniqueInput
    update: XOR<UserAccessUpdateWithoutNoteInput, UserAccessUncheckedUpdateWithoutNoteInput>
    create: XOR<UserAccessCreateWithoutNoteInput, UserAccessUncheckedCreateWithoutNoteInput>
  }

  export type UserAccessUpdateWithWhereUniqueWithoutNoteInput = {
    where: UserAccessWhereUniqueInput
    data: XOR<UserAccessUpdateWithoutNoteInput, UserAccessUncheckedUpdateWithoutNoteInput>
  }

  export type UserAccessUpdateManyWithWhereWithoutNoteInput = {
    where: UserAccessScalarWhereInput
    data: XOR<UserAccessUpdateManyMutationInput, UserAccessUncheckedUpdateManyWithoutNoteInput>
  }

  export type UserCreateWithoutOwnedGroupsInput = {
    username: string
    email: string
    password: string
    notes?: NoteCreateNestedManyWithoutAuthorInput
    memberships?: GroupMembershipCreateNestedManyWithoutUserInput
    userAccesses?: UserAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedGroupsInput = {
    userId?: number
    username: string
    email: string
    password: string
    notes?: NoteUncheckedCreateNestedManyWithoutAuthorInput
    memberships?: GroupMembershipUncheckedCreateNestedManyWithoutUserInput
    userAccesses?: UserAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedGroupsInput, UserUncheckedCreateWithoutOwnedGroupsInput>
  }

  export type GroupMembershipCreateWithoutGroupInput = {
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type GroupMembershipUncheckedCreateWithoutGroupInput = {
    userId: number
  }

  export type GroupMembershipCreateOrConnectWithoutGroupInput = {
    where: GroupMembershipWhereUniqueInput
    create: XOR<GroupMembershipCreateWithoutGroupInput, GroupMembershipUncheckedCreateWithoutGroupInput>
  }

  export type GroupMembershipCreateManyGroupInputEnvelope = {
    data: GroupMembershipCreateManyGroupInput | GroupMembershipCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type GroupAccessCreateWithoutGroupInput = {
    note: NoteCreateNestedOneWithoutGroupAccessesInput
  }

  export type GroupAccessUncheckedCreateWithoutGroupInput = {
    noteId: number
  }

  export type GroupAccessCreateOrConnectWithoutGroupInput = {
    where: GroupAccessWhereUniqueInput
    create: XOR<GroupAccessCreateWithoutGroupInput, GroupAccessUncheckedCreateWithoutGroupInput>
  }

  export type GroupAccessCreateManyGroupInputEnvelope = {
    data: GroupAccessCreateManyGroupInput | GroupAccessCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedGroupsInput = {
    update: XOR<UserUpdateWithoutOwnedGroupsInput, UserUncheckedUpdateWithoutOwnedGroupsInput>
    create: XOR<UserCreateWithoutOwnedGroupsInput, UserUncheckedCreateWithoutOwnedGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedGroupsInput, UserUncheckedUpdateWithoutOwnedGroupsInput>
  }

  export type UserUpdateWithoutOwnedGroupsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    notes?: NoteUpdateManyWithoutAuthorNestedInput
    memberships?: GroupMembershipUpdateManyWithoutUserNestedInput
    userAccesses?: UserAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedGroupsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    notes?: NoteUncheckedUpdateManyWithoutAuthorNestedInput
    memberships?: GroupMembershipUncheckedUpdateManyWithoutUserNestedInput
    userAccesses?: UserAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupMembershipUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupMembershipWhereUniqueInput
    update: XOR<GroupMembershipUpdateWithoutGroupInput, GroupMembershipUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupMembershipCreateWithoutGroupInput, GroupMembershipUncheckedCreateWithoutGroupInput>
  }

  export type GroupMembershipUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupMembershipWhereUniqueInput
    data: XOR<GroupMembershipUpdateWithoutGroupInput, GroupMembershipUncheckedUpdateWithoutGroupInput>
  }

  export type GroupMembershipUpdateManyWithWhereWithoutGroupInput = {
    where: GroupMembershipScalarWhereInput
    data: XOR<GroupMembershipUpdateManyMutationInput, GroupMembershipUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupAccessUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupAccessWhereUniqueInput
    update: XOR<GroupAccessUpdateWithoutGroupInput, GroupAccessUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupAccessCreateWithoutGroupInput, GroupAccessUncheckedCreateWithoutGroupInput>
  }

  export type GroupAccessUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupAccessWhereUniqueInput
    data: XOR<GroupAccessUpdateWithoutGroupInput, GroupAccessUncheckedUpdateWithoutGroupInput>
  }

  export type GroupAccessUpdateManyWithWhereWithoutGroupInput = {
    where: GroupAccessScalarWhereInput
    data: XOR<GroupAccessUpdateManyMutationInput, GroupAccessUncheckedUpdateManyWithoutGroupInput>
  }

  export type UserCreateWithoutMembershipsInput = {
    username: string
    email: string
    password: string
    notes?: NoteCreateNestedManyWithoutAuthorInput
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    userAccesses?: UserAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    userId?: number
    username: string
    email: string
    password: string
    notes?: NoteUncheckedCreateNestedManyWithoutAuthorInput
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    userAccesses?: UserAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type GroupCreateWithoutMembershipsInput = {
    owner: UserCreateNestedOneWithoutOwnedGroupsInput
    accesses?: GroupAccessCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutMembershipsInput = {
    groupId?: number
    ownerId: number
    accesses?: GroupAccessUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutMembershipsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMembershipsInput, GroupUncheckedCreateWithoutMembershipsInput>
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    notes?: NoteUpdateManyWithoutAuthorNestedInput
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    userAccesses?: UserAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    notes?: NoteUncheckedUpdateManyWithoutAuthorNestedInput
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    userAccesses?: UserAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GroupUpsertWithoutMembershipsInput = {
    update: XOR<GroupUpdateWithoutMembershipsInput, GroupUncheckedUpdateWithoutMembershipsInput>
    create: XOR<GroupCreateWithoutMembershipsInput, GroupUncheckedCreateWithoutMembershipsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutMembershipsInput, GroupUncheckedUpdateWithoutMembershipsInput>
  }

  export type GroupUpdateWithoutMembershipsInput = {
    owner?: UserUpdateOneRequiredWithoutOwnedGroupsNestedInput
    accesses?: GroupAccessUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutMembershipsInput = {
    groupId?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    accesses?: GroupAccessUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserCreateWithoutUserAccessesInput = {
    username: string
    email: string
    password: string
    notes?: NoteCreateNestedManyWithoutAuthorInput
    ownedGroups?: GroupCreateNestedManyWithoutOwnerInput
    memberships?: GroupMembershipCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserAccessesInput = {
    userId?: number
    username: string
    email: string
    password: string
    notes?: NoteUncheckedCreateNestedManyWithoutAuthorInput
    ownedGroups?: GroupUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: GroupMembershipUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserAccessesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserAccessesInput, UserUncheckedCreateWithoutUserAccessesInput>
  }

  export type NoteCreateWithoutUserAccessesInput = {
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutNotesInput
    groupAccesses?: GroupAccessCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutUserAccessesInput = {
    noteId?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: number
    groupAccesses?: GroupAccessUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteCreateOrConnectWithoutUserAccessesInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutUserAccessesInput, NoteUncheckedCreateWithoutUserAccessesInput>
  }

  export type UserUpsertWithoutUserAccessesInput = {
    update: XOR<UserUpdateWithoutUserAccessesInput, UserUncheckedUpdateWithoutUserAccessesInput>
    create: XOR<UserCreateWithoutUserAccessesInput, UserUncheckedCreateWithoutUserAccessesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserAccessesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserAccessesInput, UserUncheckedUpdateWithoutUserAccessesInput>
  }

  export type UserUpdateWithoutUserAccessesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    notes?: NoteUpdateManyWithoutAuthorNestedInput
    ownedGroups?: GroupUpdateManyWithoutOwnerNestedInput
    memberships?: GroupMembershipUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserAccessesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    notes?: NoteUncheckedUpdateManyWithoutAuthorNestedInput
    ownedGroups?: GroupUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: GroupMembershipUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NoteUpsertWithoutUserAccessesInput = {
    update: XOR<NoteUpdateWithoutUserAccessesInput, NoteUncheckedUpdateWithoutUserAccessesInput>
    create: XOR<NoteCreateWithoutUserAccessesInput, NoteUncheckedCreateWithoutUserAccessesInput>
    where?: NoteWhereInput
  }

  export type NoteUpdateToOneWithWhereWithoutUserAccessesInput = {
    where?: NoteWhereInput
    data: XOR<NoteUpdateWithoutUserAccessesInput, NoteUncheckedUpdateWithoutUserAccessesInput>
  }

  export type NoteUpdateWithoutUserAccessesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutNotesNestedInput
    groupAccesses?: GroupAccessUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutUserAccessesInput = {
    noteId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    groupAccesses?: GroupAccessUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type GroupCreateWithoutAccessesInput = {
    owner: UserCreateNestedOneWithoutOwnedGroupsInput
    memberships?: GroupMembershipCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutAccessesInput = {
    groupId?: number
    ownerId: number
    memberships?: GroupMembershipUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutAccessesInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutAccessesInput, GroupUncheckedCreateWithoutAccessesInput>
  }

  export type NoteCreateWithoutGroupAccessesInput = {
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutNotesInput
    userAccesses?: UserAccessCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutGroupAccessesInput = {
    noteId?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: number
    userAccesses?: UserAccessUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteCreateOrConnectWithoutGroupAccessesInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutGroupAccessesInput, NoteUncheckedCreateWithoutGroupAccessesInput>
  }

  export type GroupUpsertWithoutAccessesInput = {
    update: XOR<GroupUpdateWithoutAccessesInput, GroupUncheckedUpdateWithoutAccessesInput>
    create: XOR<GroupCreateWithoutAccessesInput, GroupUncheckedCreateWithoutAccessesInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutAccessesInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutAccessesInput, GroupUncheckedUpdateWithoutAccessesInput>
  }

  export type GroupUpdateWithoutAccessesInput = {
    owner?: UserUpdateOneRequiredWithoutOwnedGroupsNestedInput
    memberships?: GroupMembershipUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutAccessesInput = {
    groupId?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    memberships?: GroupMembershipUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type NoteUpsertWithoutGroupAccessesInput = {
    update: XOR<NoteUpdateWithoutGroupAccessesInput, NoteUncheckedUpdateWithoutGroupAccessesInput>
    create: XOR<NoteCreateWithoutGroupAccessesInput, NoteUncheckedCreateWithoutGroupAccessesInput>
    where?: NoteWhereInput
  }

  export type NoteUpdateToOneWithWhereWithoutGroupAccessesInput = {
    where?: NoteWhereInput
    data: XOR<NoteUpdateWithoutGroupAccessesInput, NoteUncheckedUpdateWithoutGroupAccessesInput>
  }

  export type NoteUpdateWithoutGroupAccessesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutNotesNestedInput
    userAccesses?: UserAccessUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutGroupAccessesInput = {
    noteId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: IntFieldUpdateOperationsInput | number
    userAccesses?: UserAccessUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type NoteCreateManyAuthorInput = {
    noteId?: number
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupCreateManyOwnerInput = {
    groupId?: number
  }

  export type GroupMembershipCreateManyUserInput = {
    groupId: number
  }

  export type UserAccessCreateManyUserInput = {
    noteId: number
  }

  export type NoteUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupAccesses?: GroupAccessUpdateManyWithoutNoteNestedInput
    userAccesses?: UserAccessUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutAuthorInput = {
    noteId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupAccesses?: GroupAccessUncheckedUpdateManyWithoutNoteNestedInput
    userAccesses?: UserAccessUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateManyWithoutAuthorInput = {
    noteId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUpdateWithoutOwnerInput = {
    memberships?: GroupMembershipUpdateManyWithoutGroupNestedInput
    accesses?: GroupAccessUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutOwnerInput = {
    groupId?: IntFieldUpdateOperationsInput | number
    memberships?: GroupMembershipUncheckedUpdateManyWithoutGroupNestedInput
    accesses?: GroupAccessUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutOwnerInput = {
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupMembershipUpdateWithoutUserInput = {
    group?: GroupUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type GroupMembershipUncheckedUpdateWithoutUserInput = {
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupMembershipUncheckedUpdateManyWithoutUserInput = {
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type UserAccessUpdateWithoutUserInput = {
    note?: NoteUpdateOneRequiredWithoutUserAccessesNestedInput
  }

  export type UserAccessUncheckedUpdateWithoutUserInput = {
    noteId?: IntFieldUpdateOperationsInput | number
  }

  export type UserAccessUncheckedUpdateManyWithoutUserInput = {
    noteId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupAccessCreateManyNoteInput = {
    groupId: number
  }

  export type UserAccessCreateManyNoteInput = {
    userId: number
  }

  export type GroupAccessUpdateWithoutNoteInput = {
    group?: GroupUpdateOneRequiredWithoutAccessesNestedInput
  }

  export type GroupAccessUncheckedUpdateWithoutNoteInput = {
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupAccessUncheckedUpdateManyWithoutNoteInput = {
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type UserAccessUpdateWithoutNoteInput = {
    user?: UserUpdateOneRequiredWithoutUserAccessesNestedInput
  }

  export type UserAccessUncheckedUpdateWithoutNoteInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserAccessUncheckedUpdateManyWithoutNoteInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupMembershipCreateManyGroupInput = {
    userId: number
  }

  export type GroupAccessCreateManyGroupInput = {
    noteId: number
  }

  export type GroupMembershipUpdateWithoutGroupInput = {
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type GroupMembershipUncheckedUpdateWithoutGroupInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupMembershipUncheckedUpdateManyWithoutGroupInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupAccessUpdateWithoutGroupInput = {
    note?: NoteUpdateOneRequiredWithoutGroupAccessesNestedInput
  }

  export type GroupAccessUncheckedUpdateWithoutGroupInput = {
    noteId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupAccessUncheckedUpdateManyWithoutGroupInput = {
    noteId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}