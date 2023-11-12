import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { MarcasModule } from './marcas/marcas.module';
import { FilesModule } from './files/files.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { DocenteModule } from './docente/docente.module';
import { AsignaturaModule } from './asignatura/asignatura.module';
import { ClaseModule } from './clase/clase.module';
import { TareaModule } from './tarea/tarea.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'estudiante',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProductsModule,
    UsersModule,
    MarcasModule,
    FilesModule,
    EstudianteModule,
    DocenteModule,
    AsignaturaModule,
    ClaseModule,
    TareaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}