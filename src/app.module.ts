import { Module } from '@nestjs/common';
import { AppController, ItemsController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, ItemsController],
  providers: [AppService],
})
export class AppModule {}
