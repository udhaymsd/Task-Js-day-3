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
  
  Object.entries(resume).forEach(([key, value]) => {
    if (typeof value === 'object') {
      console.log(`${key}:`);
      Object.entries(value).forEach(([subKey, subValue]) => {
        console.log(`  ${subKey}: ${subValue}`);
      });
    } else {
      console.log(`${key}: ${value}`);
    }
  });
  