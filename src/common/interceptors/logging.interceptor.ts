import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';


@Injectable()
export class LoggingInterceptor implements NestInterceptor {
      intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const start = Date.now();
    console.log(`→ ${request.method} ${request.url}`);
    
    return next.handle().pipe(
      tap(() => console.log(`← ${request.method} ${request.url} — ${Date.now() - start}ms`))
    );
  }
}