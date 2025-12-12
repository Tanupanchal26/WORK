exports.handler = async (event, context) => {
  const services = [
    {
      id: 1,
      name: 'Drone Operations',
      description: 'Professional UAV services for commercial and industrial applications',
      icon: '🚁'
    },
    {
      id: 2,
      name: 'Pilot Training',
      description: 'Comprehensive aviation training programs and certifications',
      icon: '✈️'
    },
    {
      id: 3,
      name: 'Consulting',
      description: 'Expert aerospace consulting and regulatory compliance support',
      icon: '🔧'
    }
  ];

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(services)
  };
};