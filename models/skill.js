const skills = [
    {skill: 'Javascript', done: true},
    {skill: 'HTML', done: true},
    {skill: 'CSS', done: true},
    {skill: 'Express', done: false}
];
  
module.exports = {
    getAll,
    getOne
};
  
function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id];
}