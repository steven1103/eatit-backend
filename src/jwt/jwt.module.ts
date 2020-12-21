import { DynamicModule, Global, Module } from '@nestjs/common';
import { CONFIG_OPTIONS } from './jwt.constants';
import { JwtModuleOptions } from './jwt.interfaces';
import { JwtService } from './jwt.service';

@Module({})
@Global()
export class JwtModule {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static forRoot(options:JwtModuleOptions):DynamicModule {
        return {
            module:JwtModule,
            exports:[JwtService],
            providers:[
                JwtService,
                {
                    provide:CONFIG_OPTIONS,
                    useValue:options,
                }
            ]
        }
    }
}
  