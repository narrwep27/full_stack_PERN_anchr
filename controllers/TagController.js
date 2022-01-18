const { Tag } = require('../models');

const GetAllTags = async (req, res) => {
  try {
    const tags = await Tag.findAll();
    res.send(tags);
  } catch (error) {
    throw error;
  }
};

const GetTagByID = async (req, res) => {
  try {
    let id = parseInt(req.params.tag_id);
    const tag = await Tag.findByPk(id);
    res.send(tag);
  } catch (error) {
    throw error;
  }
};

const GetTagsByUserId = async (req, res) => {
  try {
    const tags = await Tag.findAll({ where: { user_id: req.params.user_id }});
    res.send(tags);
  } catch (error) {
    throw error;
  };
};

const CreateTag = async (req, res) => {
  try {
    let tag = await Tag.create(req.body);
    res.send(tag);
  } catch (error) {
    throw error;
  }
};

const UpdateTag = async (req, res) => {
  try {
    let id = parseInt(req.params.tag_id);
    let tagUpdate = await Tag.update(req.body, {
      where: { id: id },
      returning: true
    });
    res.send(tagUpdate);
  } catch (error) {
    throw error;
  }
};

const DeleteTag = async (req, res) => {
  try {
    let id = parseInt(req.params.tag_id);
    await Tag.destroy({ where: { id: id } });
    res.send({ message: `Tag ID ${id} has been deleted.` });
  } catch (error) {
    throw error;
  }
};

const GetTagByUser = async (req, res) => {
  try {
    let id = parseInt(req.params.user_id);
    const tag = await Tag.findAll({ where: { user_id: id } });
    res.send(tag);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateTag,
  GetAllTags,
  GetTagByID,
  GetTagsByUserId,
  UpdateTag,
  DeleteTag,
  GetTagByUser
};
