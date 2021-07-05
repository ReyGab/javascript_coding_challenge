const people = [{
    name: 'Arisa',
    department: 'BP',
    gender: 'F'
    },
    {
    name: 'Ham',
    department: 'IT',
    gender: 'F'
    },
    {
    name: 'Alice',
    department: 'IT',
    gender: 'F'
    },
    {
    name: 'Anna',
    department: 'DA',
    gender: 'F'
    },
    {
    name: 'Larry',
    department: 'Sales',
    gender: 'M'
    },
    {
    name: 'Ria',
    department: 'Sales',
    gender: 'F'
    },
    {
    name: 'JD',
    department: 'Sales',
    gender: 'M'
    },
    {
    name: 'Thor',
    department: 'Sales',
    gender: 'M'
    },
    {
    name: 'Karl',
    department: 'Sales',
    gender: 'M'}];
    
    
    listByGender = (gender) => {
     return people.filter((p) => {
          return p.gender.toLowerCase() == gender.toLowerCase()
      });
    }
    
    groupByDepartment = () => {
        return people.sort((a, b) => {
            return a.department - b.department
    })
    }
    
    //console.log(listByGender('M'));
    //console.log(groupByDepartment());