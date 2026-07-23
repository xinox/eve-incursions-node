declare module 'sql.js' {
  export type SqlValue = string | number | Uint8Array | null;

  export class Statement {
    step(): boolean;
    getAsObject(): Record<string, SqlValue>;
    free(): void;
  }

  export class Database {
    constructor(data?: Uint8Array | Buffer);
    prepare(sql: string, params?: unknown[]): Statement;
    close(): void;
  }

  export type SqlJsStatic = {
    Database: typeof Database;
  };

  export default function initSqlJs(): Promise<SqlJsStatic>;
}
