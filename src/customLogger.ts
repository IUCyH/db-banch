import { Logger } from "typeorm";
import { performance } from "perf_hooks";

export class CustomLogger implements Logger {
    logQuery(query: string, parameters?: any[]) {
        const start = performance.now();

        console.log(`[QUERY START] ${query}`);

        setImmediate(() => {
            const end = performance.now();
            console.log(`[QUERY END] ${query}`);
            console.log(`[EXECUTION TIME] ${(end - start).toFixed(3)} ms`);
        });
    }

    logQueryError(error: string, query: string, parameters?: any[]) {
        console.error(`[QUERY ERROR] ${query}`, error);
    }

    logQuerySlow(time: number, query: string, parameters?: any[]) {
        console.warn(`[SLOW QUERY] ${query} - Execution Time: ${time}ms`);
    }

    logSchemaBuild(message: string) {
        console.log(`[SCHEMA] ${message}`);
    }

    logMigration(message: string) {
        console.log(`[MIGRATION] ${message}`);
    }

    log(level: "log" | "info" | "warn", message: string) {
        console.log(`[${level.toUpperCase()}] ${message}`);
    }
}