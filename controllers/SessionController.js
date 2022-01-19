const { Session, Tag } = require('../models');

const GetAllSessions = async (req, res) => {
  try {
    const sessions = await Session.findAll();
    res.send(sessions);
  } catch (error) {
    throw error;
  }
};

const GetSessionByID = async (req, res) => {
  try {
    let id = parseInt(req.params.session_id);
    const session = await Session.findByPk(id);
    res.send(session);
  } catch (error) {
    throw error;
  }
};

const GetSessionByUserId = async (req, res) => {
  try {
    const sessions = await Session.findAll({ 
      where: {user_id: req.params.user_id},
      include: Tag,
      order: ['id']
    });
    res.send(sessions);
  } catch (error) {
    throw error;
  };
};

const CreateSession = async (req, res) => {
  try {
    let session = await Session.create(req.body);
    res.send(session);
  } catch (error) {
    console.log(req.body);
    throw error;
  }
};

const UpdateSession = async (req, res) => {
  try {
    let id = parseInt(req.params.session_id);
    let sessionUpdate = await Session.update(req.body, {
      where: { id: id },
      returning: true
    });
    res.send(sessionUpdate);
  } catch (error) {
    throw error;
  }
};

const DeleteSession = async (req, res) => {
  try {
    let id = parseInt(req.params.session_id);
    await Session.destroy({ where: { id: id } });
    res.send({ message: `Session ID ${id} has been deleted.` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateSession,
  GetAllSessions,
  GetSessionByID,
  GetSessionByUserId,
  UpdateSession,
  DeleteSession
};
