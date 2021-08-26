export interface ServerConfig {
  port: number;
  host: string;
  logger: boolean | { prettyPrint: true };
}
