const skills = [
    {skill: 'Javascript', done: true},
    {skill: 'HTML', done: true},
    {skill: 'CSS', done: true},
    {skill: 'Express', done: false}
];
  
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};
  
function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id];
}

function create(skill) {
    skills.push(skill)
}

function deleteOne(id) {
    skills.splice(id, 1);
}

function update(id, skill) {
    skills[id] = skill;
}