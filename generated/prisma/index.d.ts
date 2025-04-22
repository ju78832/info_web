
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Formdata
 * 
 */
export type Formdata = $Result.DefaultSelection<Prisma.$FormdataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Formdata
 * const formdata = await prisma.formdata.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Formdata
   * const formdata = await prisma.formdata.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.formdata`: Exposes CRUD operations for the **Formdata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formdata
    * const formdata = await prisma.formdata.findMany()
    * ```
    */
  get formdata(): Prisma.FormdataDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Formdata: 'Formdata'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "formdata"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Formdata: {
        payload: Prisma.$FormdataPayload<ExtArgs>
        fields: Prisma.FormdataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormdataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormdataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormdataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormdataPayload>
          }
          findFirst: {
            args: Prisma.FormdataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormdataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormdataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormdataPayload>
          }
          findMany: {
            args: Prisma.FormdataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormdataPayload>[]
          }
          create: {
            args: Prisma.FormdataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormdataPayload>
          }
          createMany: {
            args: Prisma.FormdataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormdataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormdataPayload>[]
          }
          delete: {
            args: Prisma.FormdataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormdataPayload>
          }
          update: {
            args: Prisma.FormdataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormdataPayload>
          }
          deleteMany: {
            args: Prisma.FormdataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormdataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormdataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormdataPayload>[]
          }
          upsert: {
            args: Prisma.FormdataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormdataPayload>
          }
          aggregate: {
            args: Prisma.FormdataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormdata>
          }
          groupBy: {
            args: Prisma.FormdataGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormdataGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormdataCountArgs<ExtArgs>
            result: $Utils.Optional<FormdataCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    formdata?: FormdataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model Formdata
   */

  export type AggregateFormdata = {
    _count: FormdataCountAggregateOutputType | null
    _avg: FormdataAvgAggregateOutputType | null
    _sum: FormdataSumAggregateOutputType | null
    _min: FormdataMinAggregateOutputType | null
    _max: FormdataMaxAggregateOutputType | null
  }

  export type FormdataAvgAggregateOutputType = {
    selfRating: number | null
  }

  export type FormdataSumAggregateOutputType = {
    selfRating: number | null
  }

  export type FormdataMinAggregateOutputType = {
    id: string | null
    name: string | null
    selfRating: number | null
    achievements: string | null
    challenges: string | null
    goals: string | null
    feedback: string | null
    dreamTeam: string | null
    improvement: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormdataMaxAggregateOutputType = {
    id: string | null
    name: string | null
    selfRating: number | null
    achievements: string | null
    challenges: string | null
    goals: string | null
    feedback: string | null
    dreamTeam: string | null
    improvement: string | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormdataCountAggregateOutputType = {
    id: number
    name: number
    selfRating: number
    achievements: number
    challenges: number
    goals: number
    feedback: number
    dreamTeam: number
    improvement: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FormdataAvgAggregateInputType = {
    selfRating?: true
  }

  export type FormdataSumAggregateInputType = {
    selfRating?: true
  }

  export type FormdataMinAggregateInputType = {
    id?: true
    name?: true
    selfRating?: true
    achievements?: true
    challenges?: true
    goals?: true
    feedback?: true
    dreamTeam?: true
    improvement?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormdataMaxAggregateInputType = {
    id?: true
    name?: true
    selfRating?: true
    achievements?: true
    challenges?: true
    goals?: true
    feedback?: true
    dreamTeam?: true
    improvement?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormdataCountAggregateInputType = {
    id?: true
    name?: true
    selfRating?: true
    achievements?: true
    challenges?: true
    goals?: true
    feedback?: true
    dreamTeam?: true
    improvement?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FormdataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Formdata to aggregate.
     */
    where?: FormdataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formdata to fetch.
     */
    orderBy?: FormdataOrderByWithRelationInput | FormdataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormdataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formdata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formdata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Formdata
    **/
    _count?: true | FormdataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormdataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormdataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormdataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormdataMaxAggregateInputType
  }

  export type GetFormdataAggregateType<T extends FormdataAggregateArgs> = {
        [P in keyof T & keyof AggregateFormdata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormdata[P]>
      : GetScalarType<T[P], AggregateFormdata[P]>
  }




  export type FormdataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormdataWhereInput
    orderBy?: FormdataOrderByWithAggregationInput | FormdataOrderByWithAggregationInput[]
    by: FormdataScalarFieldEnum[] | FormdataScalarFieldEnum
    having?: FormdataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormdataCountAggregateInputType | true
    _avg?: FormdataAvgAggregateInputType
    _sum?: FormdataSumAggregateInputType
    _min?: FormdataMinAggregateInputType
    _max?: FormdataMaxAggregateInputType
  }

  export type FormdataGroupByOutputType = {
    id: string
    name: string
    selfRating: number
    achievements: string
    challenges: string
    goals: string
    feedback: string | null
    dreamTeam: string | null
    improvement: string
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: FormdataCountAggregateOutputType | null
    _avg: FormdataAvgAggregateOutputType | null
    _sum: FormdataSumAggregateOutputType | null
    _min: FormdataMinAggregateOutputType | null
    _max: FormdataMaxAggregateOutputType | null
  }

  type GetFormdataGroupByPayload<T extends FormdataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormdataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormdataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormdataGroupByOutputType[P]>
            : GetScalarType<T[P], FormdataGroupByOutputType[P]>
        }
      >
    >


  export type FormdataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    selfRating?: boolean
    achievements?: boolean
    challenges?: boolean
    goals?: boolean
    feedback?: boolean
    dreamTeam?: boolean
    improvement?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["formdata"]>

  export type FormdataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    selfRating?: boolean
    achievements?: boolean
    challenges?: boolean
    goals?: boolean
    feedback?: boolean
    dreamTeam?: boolean
    improvement?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["formdata"]>

  export type FormdataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    selfRating?: boolean
    achievements?: boolean
    challenges?: boolean
    goals?: boolean
    feedback?: boolean
    dreamTeam?: boolean
    improvement?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["formdata"]>

  export type FormdataSelectScalar = {
    id?: boolean
    name?: boolean
    selfRating?: boolean
    achievements?: boolean
    challenges?: boolean
    goals?: boolean
    feedback?: boolean
    dreamTeam?: boolean
    improvement?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FormdataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "selfRating" | "achievements" | "challenges" | "goals" | "feedback" | "dreamTeam" | "improvement" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["formdata"]>

  export type $FormdataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Formdata"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      selfRating: number
      achievements: string
      challenges: string
      goals: string
      feedback: string | null
      dreamTeam: string | null
      improvement: string
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["formdata"]>
    composites: {}
  }

  type FormdataGetPayload<S extends boolean | null | undefined | FormdataDefaultArgs> = $Result.GetResult<Prisma.$FormdataPayload, S>

  type FormdataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormdataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormdataCountAggregateInputType | true
    }

  export interface FormdataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Formdata'], meta: { name: 'Formdata' } }
    /**
     * Find zero or one Formdata that matches the filter.
     * @param {FormdataFindUniqueArgs} args - Arguments to find a Formdata
     * @example
     * // Get one Formdata
     * const formdata = await prisma.formdata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormdataFindUniqueArgs>(args: SelectSubset<T, FormdataFindUniqueArgs<ExtArgs>>): Prisma__FormdataClient<$Result.GetResult<Prisma.$FormdataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formdata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormdataFindUniqueOrThrowArgs} args - Arguments to find a Formdata
     * @example
     * // Get one Formdata
     * const formdata = await prisma.formdata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormdataFindUniqueOrThrowArgs>(args: SelectSubset<T, FormdataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormdataClient<$Result.GetResult<Prisma.$FormdataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formdata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormdataFindFirstArgs} args - Arguments to find a Formdata
     * @example
     * // Get one Formdata
     * const formdata = await prisma.formdata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormdataFindFirstArgs>(args?: SelectSubset<T, FormdataFindFirstArgs<ExtArgs>>): Prisma__FormdataClient<$Result.GetResult<Prisma.$FormdataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formdata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormdataFindFirstOrThrowArgs} args - Arguments to find a Formdata
     * @example
     * // Get one Formdata
     * const formdata = await prisma.formdata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormdataFindFirstOrThrowArgs>(args?: SelectSubset<T, FormdataFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormdataClient<$Result.GetResult<Prisma.$FormdataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formdata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormdataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formdata
     * const formdata = await prisma.formdata.findMany()
     * 
     * // Get first 10 Formdata
     * const formdata = await prisma.formdata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formdataWithIdOnly = await prisma.formdata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormdataFindManyArgs>(args?: SelectSubset<T, FormdataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormdataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formdata.
     * @param {FormdataCreateArgs} args - Arguments to create a Formdata.
     * @example
     * // Create one Formdata
     * const Formdata = await prisma.formdata.create({
     *   data: {
     *     // ... data to create a Formdata
     *   }
     * })
     * 
     */
    create<T extends FormdataCreateArgs>(args: SelectSubset<T, FormdataCreateArgs<ExtArgs>>): Prisma__FormdataClient<$Result.GetResult<Prisma.$FormdataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formdata.
     * @param {FormdataCreateManyArgs} args - Arguments to create many Formdata.
     * @example
     * // Create many Formdata
     * const formdata = await prisma.formdata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormdataCreateManyArgs>(args?: SelectSubset<T, FormdataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Formdata and returns the data saved in the database.
     * @param {FormdataCreateManyAndReturnArgs} args - Arguments to create many Formdata.
     * @example
     * // Create many Formdata
     * const formdata = await prisma.formdata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Formdata and only return the `id`
     * const formdataWithIdOnly = await prisma.formdata.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormdataCreateManyAndReturnArgs>(args?: SelectSubset<T, FormdataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormdataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Formdata.
     * @param {FormdataDeleteArgs} args - Arguments to delete one Formdata.
     * @example
     * // Delete one Formdata
     * const Formdata = await prisma.formdata.delete({
     *   where: {
     *     // ... filter to delete one Formdata
     *   }
     * })
     * 
     */
    delete<T extends FormdataDeleteArgs>(args: SelectSubset<T, FormdataDeleteArgs<ExtArgs>>): Prisma__FormdataClient<$Result.GetResult<Prisma.$FormdataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formdata.
     * @param {FormdataUpdateArgs} args - Arguments to update one Formdata.
     * @example
     * // Update one Formdata
     * const formdata = await prisma.formdata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormdataUpdateArgs>(args: SelectSubset<T, FormdataUpdateArgs<ExtArgs>>): Prisma__FormdataClient<$Result.GetResult<Prisma.$FormdataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formdata.
     * @param {FormdataDeleteManyArgs} args - Arguments to filter Formdata to delete.
     * @example
     * // Delete a few Formdata
     * const { count } = await prisma.formdata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormdataDeleteManyArgs>(args?: SelectSubset<T, FormdataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormdataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formdata
     * const formdata = await prisma.formdata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormdataUpdateManyArgs>(args: SelectSubset<T, FormdataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formdata and returns the data updated in the database.
     * @param {FormdataUpdateManyAndReturnArgs} args - Arguments to update many Formdata.
     * @example
     * // Update many Formdata
     * const formdata = await prisma.formdata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Formdata and only return the `id`
     * const formdataWithIdOnly = await prisma.formdata.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends FormdataUpdateManyAndReturnArgs>(args: SelectSubset<T, FormdataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormdataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Formdata.
     * @param {FormdataUpsertArgs} args - Arguments to update or create a Formdata.
     * @example
     * // Update or create a Formdata
     * const formdata = await prisma.formdata.upsert({
     *   create: {
     *     // ... data to create a Formdata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formdata we want to update
     *   }
     * })
     */
    upsert<T extends FormdataUpsertArgs>(args: SelectSubset<T, FormdataUpsertArgs<ExtArgs>>): Prisma__FormdataClient<$Result.GetResult<Prisma.$FormdataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormdataCountArgs} args - Arguments to filter Formdata to count.
     * @example
     * // Count the number of Formdata
     * const count = await prisma.formdata.count({
     *   where: {
     *     // ... the filter for the Formdata we want to count
     *   }
     * })
    **/
    count<T extends FormdataCountArgs>(
      args?: Subset<T, FormdataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormdataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormdataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormdataAggregateArgs>(args: Subset<T, FormdataAggregateArgs>): Prisma.PrismaPromise<GetFormdataAggregateType<T>>

    /**
     * Group by Formdata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormdataGroupByArgs} args - Group by arguments.
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
      T extends FormdataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormdataGroupByArgs['orderBy'] }
        : { orderBy?: FormdataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormdataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormdataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Formdata model
   */
  readonly fields: FormdataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Formdata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormdataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Formdata model
   */
  interface FormdataFieldRefs {
    readonly id: FieldRef<"Formdata", 'String'>
    readonly name: FieldRef<"Formdata", 'String'>
    readonly selfRating: FieldRef<"Formdata", 'Int'>
    readonly achievements: FieldRef<"Formdata", 'String'>
    readonly challenges: FieldRef<"Formdata", 'String'>
    readonly goals: FieldRef<"Formdata", 'String'>
    readonly feedback: FieldRef<"Formdata", 'String'>
    readonly dreamTeam: FieldRef<"Formdata", 'String'>
    readonly improvement: FieldRef<"Formdata", 'String'>
    readonly date: FieldRef<"Formdata", 'DateTime'>
    readonly createdAt: FieldRef<"Formdata", 'DateTime'>
    readonly updatedAt: FieldRef<"Formdata", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Formdata findUnique
   */
  export type FormdataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formdata
     */
    select?: FormdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formdata
     */
    omit?: FormdataOmit<ExtArgs> | null
    /**
     * Filter, which Formdata to fetch.
     */
    where: FormdataWhereUniqueInput
  }

  /**
   * Formdata findUniqueOrThrow
   */
  export type FormdataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formdata
     */
    select?: FormdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formdata
     */
    omit?: FormdataOmit<ExtArgs> | null
    /**
     * Filter, which Formdata to fetch.
     */
    where: FormdataWhereUniqueInput
  }

  /**
   * Formdata findFirst
   */
  export type FormdataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formdata
     */
    select?: FormdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formdata
     */
    omit?: FormdataOmit<ExtArgs> | null
    /**
     * Filter, which Formdata to fetch.
     */
    where?: FormdataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formdata to fetch.
     */
    orderBy?: FormdataOrderByWithRelationInput | FormdataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Formdata.
     */
    cursor?: FormdataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formdata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formdata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Formdata.
     */
    distinct?: FormdataScalarFieldEnum | FormdataScalarFieldEnum[]
  }

  /**
   * Formdata findFirstOrThrow
   */
  export type FormdataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formdata
     */
    select?: FormdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formdata
     */
    omit?: FormdataOmit<ExtArgs> | null
    /**
     * Filter, which Formdata to fetch.
     */
    where?: FormdataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formdata to fetch.
     */
    orderBy?: FormdataOrderByWithRelationInput | FormdataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Formdata.
     */
    cursor?: FormdataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formdata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formdata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Formdata.
     */
    distinct?: FormdataScalarFieldEnum | FormdataScalarFieldEnum[]
  }

  /**
   * Formdata findMany
   */
  export type FormdataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formdata
     */
    select?: FormdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formdata
     */
    omit?: FormdataOmit<ExtArgs> | null
    /**
     * Filter, which Formdata to fetch.
     */
    where?: FormdataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formdata to fetch.
     */
    orderBy?: FormdataOrderByWithRelationInput | FormdataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Formdata.
     */
    cursor?: FormdataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formdata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formdata.
     */
    skip?: number
    distinct?: FormdataScalarFieldEnum | FormdataScalarFieldEnum[]
  }

  /**
   * Formdata create
   */
  export type FormdataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formdata
     */
    select?: FormdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formdata
     */
    omit?: FormdataOmit<ExtArgs> | null
    /**
     * The data needed to create a Formdata.
     */
    data: XOR<FormdataCreateInput, FormdataUncheckedCreateInput>
  }

  /**
   * Formdata createMany
   */
  export type FormdataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Formdata.
     */
    data: FormdataCreateManyInput | FormdataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Formdata createManyAndReturn
   */
  export type FormdataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formdata
     */
    select?: FormdataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Formdata
     */
    omit?: FormdataOmit<ExtArgs> | null
    /**
     * The data used to create many Formdata.
     */
    data: FormdataCreateManyInput | FormdataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Formdata update
   */
  export type FormdataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formdata
     */
    select?: FormdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formdata
     */
    omit?: FormdataOmit<ExtArgs> | null
    /**
     * The data needed to update a Formdata.
     */
    data: XOR<FormdataUpdateInput, FormdataUncheckedUpdateInput>
    /**
     * Choose, which Formdata to update.
     */
    where: FormdataWhereUniqueInput
  }

  /**
   * Formdata updateMany
   */
  export type FormdataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Formdata.
     */
    data: XOR<FormdataUpdateManyMutationInput, FormdataUncheckedUpdateManyInput>
    /**
     * Filter which Formdata to update
     */
    where?: FormdataWhereInput
    /**
     * Limit how many Formdata to update.
     */
    limit?: number
  }

  /**
   * Formdata updateManyAndReturn
   */
  export type FormdataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formdata
     */
    select?: FormdataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Formdata
     */
    omit?: FormdataOmit<ExtArgs> | null
    /**
     * The data used to update Formdata.
     */
    data: XOR<FormdataUpdateManyMutationInput, FormdataUncheckedUpdateManyInput>
    /**
     * Filter which Formdata to update
     */
    where?: FormdataWhereInput
    /**
     * Limit how many Formdata to update.
     */
    limit?: number
  }

  /**
   * Formdata upsert
   */
  export type FormdataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formdata
     */
    select?: FormdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formdata
     */
    omit?: FormdataOmit<ExtArgs> | null
    /**
     * The filter to search for the Formdata to update in case it exists.
     */
    where: FormdataWhereUniqueInput
    /**
     * In case the Formdata found by the `where` argument doesn't exist, create a new Formdata with this data.
     */
    create: XOR<FormdataCreateInput, FormdataUncheckedCreateInput>
    /**
     * In case the Formdata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormdataUpdateInput, FormdataUncheckedUpdateInput>
  }

  /**
   * Formdata delete
   */
  export type FormdataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formdata
     */
    select?: FormdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formdata
     */
    omit?: FormdataOmit<ExtArgs> | null
    /**
     * Filter which Formdata to delete.
     */
    where: FormdataWhereUniqueInput
  }

  /**
   * Formdata deleteMany
   */
  export type FormdataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Formdata to delete
     */
    where?: FormdataWhereInput
    /**
     * Limit how many Formdata to delete.
     */
    limit?: number
  }

  /**
   * Formdata without action
   */
  export type FormdataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formdata
     */
    select?: FormdataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formdata
     */
    omit?: FormdataOmit<ExtArgs> | null
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


  export const FormdataScalarFieldEnum: {
    id: 'id',
    name: 'name',
    selfRating: 'selfRating',
    achievements: 'achievements',
    challenges: 'challenges',
    goals: 'goals',
    feedback: 'feedback',
    dreamTeam: 'dreamTeam',
    improvement: 'improvement',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FormdataScalarFieldEnum = (typeof FormdataScalarFieldEnum)[keyof typeof FormdataScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type FormdataWhereInput = {
    AND?: FormdataWhereInput | FormdataWhereInput[]
    OR?: FormdataWhereInput[]
    NOT?: FormdataWhereInput | FormdataWhereInput[]
    id?: StringFilter<"Formdata"> | string
    name?: StringFilter<"Formdata"> | string
    selfRating?: IntFilter<"Formdata"> | number
    achievements?: StringFilter<"Formdata"> | string
    challenges?: StringFilter<"Formdata"> | string
    goals?: StringFilter<"Formdata"> | string
    feedback?: StringNullableFilter<"Formdata"> | string | null
    dreamTeam?: StringNullableFilter<"Formdata"> | string | null
    improvement?: StringFilter<"Formdata"> | string
    date?: DateTimeFilter<"Formdata"> | Date | string
    createdAt?: DateTimeFilter<"Formdata"> | Date | string
    updatedAt?: DateTimeFilter<"Formdata"> | Date | string
  }

  export type FormdataOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    selfRating?: SortOrder
    achievements?: SortOrder
    challenges?: SortOrder
    goals?: SortOrder
    feedback?: SortOrderInput | SortOrder
    dreamTeam?: SortOrderInput | SortOrder
    improvement?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormdataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormdataWhereInput | FormdataWhereInput[]
    OR?: FormdataWhereInput[]
    NOT?: FormdataWhereInput | FormdataWhereInput[]
    name?: StringFilter<"Formdata"> | string
    selfRating?: IntFilter<"Formdata"> | number
    achievements?: StringFilter<"Formdata"> | string
    challenges?: StringFilter<"Formdata"> | string
    goals?: StringFilter<"Formdata"> | string
    feedback?: StringNullableFilter<"Formdata"> | string | null
    dreamTeam?: StringNullableFilter<"Formdata"> | string | null
    improvement?: StringFilter<"Formdata"> | string
    date?: DateTimeFilter<"Formdata"> | Date | string
    createdAt?: DateTimeFilter<"Formdata"> | Date | string
    updatedAt?: DateTimeFilter<"Formdata"> | Date | string
  }, "id">

  export type FormdataOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    selfRating?: SortOrder
    achievements?: SortOrder
    challenges?: SortOrder
    goals?: SortOrder
    feedback?: SortOrderInput | SortOrder
    dreamTeam?: SortOrderInput | SortOrder
    improvement?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FormdataCountOrderByAggregateInput
    _avg?: FormdataAvgOrderByAggregateInput
    _max?: FormdataMaxOrderByAggregateInput
    _min?: FormdataMinOrderByAggregateInput
    _sum?: FormdataSumOrderByAggregateInput
  }

  export type FormdataScalarWhereWithAggregatesInput = {
    AND?: FormdataScalarWhereWithAggregatesInput | FormdataScalarWhereWithAggregatesInput[]
    OR?: FormdataScalarWhereWithAggregatesInput[]
    NOT?: FormdataScalarWhereWithAggregatesInput | FormdataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Formdata"> | string
    name?: StringWithAggregatesFilter<"Formdata"> | string
    selfRating?: IntWithAggregatesFilter<"Formdata"> | number
    achievements?: StringWithAggregatesFilter<"Formdata"> | string
    challenges?: StringWithAggregatesFilter<"Formdata"> | string
    goals?: StringWithAggregatesFilter<"Formdata"> | string
    feedback?: StringNullableWithAggregatesFilter<"Formdata"> | string | null
    dreamTeam?: StringNullableWithAggregatesFilter<"Formdata"> | string | null
    improvement?: StringWithAggregatesFilter<"Formdata"> | string
    date?: DateTimeWithAggregatesFilter<"Formdata"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Formdata"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Formdata"> | Date | string
  }

  export type FormdataCreateInput = {
    id?: string
    name: string
    selfRating: number
    achievements: string
    challenges: string
    goals: string
    feedback?: string | null
    dreamTeam?: string | null
    improvement: string
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormdataUncheckedCreateInput = {
    id?: string
    name: string
    selfRating: number
    achievements: string
    challenges: string
    goals: string
    feedback?: string | null
    dreamTeam?: string | null
    improvement: string
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormdataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    selfRating?: IntFieldUpdateOperationsInput | number
    achievements?: StringFieldUpdateOperationsInput | string
    challenges?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    dreamTeam?: NullableStringFieldUpdateOperationsInput | string | null
    improvement?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormdataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    selfRating?: IntFieldUpdateOperationsInput | number
    achievements?: StringFieldUpdateOperationsInput | string
    challenges?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    dreamTeam?: NullableStringFieldUpdateOperationsInput | string | null
    improvement?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormdataCreateManyInput = {
    id?: string
    name: string
    selfRating: number
    achievements: string
    challenges: string
    goals: string
    feedback?: string | null
    dreamTeam?: string | null
    improvement: string
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormdataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    selfRating?: IntFieldUpdateOperationsInput | number
    achievements?: StringFieldUpdateOperationsInput | string
    challenges?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    dreamTeam?: NullableStringFieldUpdateOperationsInput | string | null
    improvement?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormdataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    selfRating?: IntFieldUpdateOperationsInput | number
    achievements?: StringFieldUpdateOperationsInput | string
    challenges?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    dreamTeam?: NullableStringFieldUpdateOperationsInput | string | null
    improvement?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FormdataCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    selfRating?: SortOrder
    achievements?: SortOrder
    challenges?: SortOrder
    goals?: SortOrder
    feedback?: SortOrder
    dreamTeam?: SortOrder
    improvement?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormdataAvgOrderByAggregateInput = {
    selfRating?: SortOrder
  }

  export type FormdataMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    selfRating?: SortOrder
    achievements?: SortOrder
    challenges?: SortOrder
    goals?: SortOrder
    feedback?: SortOrder
    dreamTeam?: SortOrder
    improvement?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormdataMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    selfRating?: SortOrder
    achievements?: SortOrder
    challenges?: SortOrder
    goals?: SortOrder
    feedback?: SortOrder
    dreamTeam?: SortOrder
    improvement?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormdataSumOrderByAggregateInput = {
    selfRating?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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