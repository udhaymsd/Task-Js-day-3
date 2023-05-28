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
  
  const keys = Object.keys(resume);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = resume[key];
  
    if (typeof value === 'object') {
      console.log(`${key}:`);
      const subKeys = Object.keys(value);
      for (let j = 0; j < subKeys.length; j++) {
        const subKey = subKeys[j];
        const subValue = value[subKey];
        console.log(`  ${subKey}: ${subValue}`);
      }
    } else {
      console.log(`${key}: ${value}`);
    }
  }
  