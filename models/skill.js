const skills = [
    {skill: 'Javascript', done: true},
    {skill: 'HTML', done: true},
    {skill: 'CSS', done: true},
    {skill: 'Express', done: false}
];
  
module.exports = {
    getAll,
    getOne,
    create
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