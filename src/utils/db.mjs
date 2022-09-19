// getting-started.js
import { Kitten } from './model/index.mjs';

function deleteCode(length) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export async function main(value) {
  const silence = new Kitten({
    name: value,
    deleteCode: deleteCode(10),
  });
  return await silence.save();
}

export async function updateMain(uuid, value) {
  await Kitten.updateOne({ _id: uuid }, { name: value });

  const silence = await Kitten.findOne({ _id: uuid });
  return silence;
}

export async function getMain(uuid, value) {
  const silence = await Kitten.findOne({ _id: uuid });
  return silence;
}

export async function deleteMain(uuid, deleteCode) {
  await Kitten.deleteOne({ _id: uuid, deleteCode: deleteCode });
  return true;
}
