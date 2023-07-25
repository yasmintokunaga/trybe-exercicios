const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
  });
  (async () => {
    await sequelize.sync({ force: true });

    // 1- incluindo um novo usuário utilizando o build >>> tem que salvar depois
    const sara = User.build({
      fullName: 'Sara Silva Santos',
      email: 'sara.ss@trybe.com',
    });
    await sara.save();

    // 2 - incluindo um novo usuário utilizando o create que é assíncrono, não precisa salvar
    const yasmin = await User.create({
      fullName: 'Yasmin Souza Tokunaga',
      email: 'yasmin.st@gmail.com',
    });
    yasmin.fullName = 'Yasmin Tokunaga';

    // 3 - Atualizando as informações pelo set
    const lucas = await User.create({
      fullName: 'Lucas Silva Santos',
      email: 'lucas.ss@trybe.com',
    });

    lucas.set({
      fullName: 'Pedro Silva Santos',
      email: 'pedro.ss@trybe.com',
    });
    await lucas.save();

    // 4 - atualizando um campo pelo update
    const jane = await User.create({
      fullName: 'Jane Doe',
      email: 'jane.doe@trybe.com',
    });

    jane.email = 'ada.doe@trybe.com';
    await jane.update({ fullName: 'Ada Joe' });
    await jane.save();

    // 5 - Excluindo informações do banco de dados
    const mario = await User.create({ fullNmae: 'Mario bors' });
    await mario.destroy();

  })();

  return User;
};

module.exports = UserModel;
