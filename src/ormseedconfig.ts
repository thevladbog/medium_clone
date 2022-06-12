import ormconfig from './ormconfig';

const ormceedconfig = {
  ...ormconfig,
  migrations: [__dirname + '/seeds/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/seeds',
  },
};

export default ormceedconfig;
