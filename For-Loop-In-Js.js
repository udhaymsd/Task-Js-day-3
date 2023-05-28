
// For in loop - Method

const resume = {
    "name": "Udhayakumar",
    "education": {
      "degree": "M.Com",
      "institution": "Univity of Madras "

    },
    "currentPosition": {
      "company": "Fujitec India Pvt Ltd",
      "location": "Chennai",
      "role": "Support Executive"
    },
    "course": {
      "name": "Full Stack Development (MERN Stack)",
      "institution": "Guvi"
    }
  };
  
  for (let key in resume) {
    if (typeof resume[key] === 'object') {
      console.log(`${key}:`);
      for (let subKey in resume[key]) {
        console.log(`  ${subKey}: ${resume[key][subKey]}`);
      }
    } else {
      console.log(`${key}: ${resume[key]}`);
    }
  }
  