
exports.seed = function(knex) {
    return knex('projects').insert([
      {
        id: 1, 
        project_name: 'big travel tour',
        project_desc: '2020 travel',
        project_completed: false
      },
      {
        id: 2, 
        project_name: 'Find a job',
        project_desc: 'get a job in the tech ',
        project_completed: false
      },
      {
        id: 3, 
        project_name: 'get a dog',
        project_desc: 'eventually a dog',
        project_completed: false
      }
    ]);
  };
  