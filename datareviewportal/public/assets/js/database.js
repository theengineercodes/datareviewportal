


const fetchDataFromGoogleSheet = async (rV4EmR9SSKFijTbJV1T8UKs0v7yQe5mJy_SLwQgTMw0, rangeName) => {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${rV4EmR9SSKFijTbJV1T8UKs0v7yQe5mJy_SLwQgTMw0}/values/${rangeName}`;
    const response = await fetch(url, {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
      },
    });
  
    if (response.status === 200) {
      const data = await response.json();
      return data.values;
    } else {
      throw new Error(`Error fetching data from Google Sheet: ${response.status}`);
    }
  };
  
  const spreadsheetId = 'rV4EmR9SSKFijTbJV1T8UKs0v7yQe5mJy_SLwQgTMw0';
  const rangeName = 'Sheet1!A1:B10';
  
  const data = await fetchDataFromGoogleSheet(rV4EmR9SSKFijTbJV1T8UKs0v7yQe5mJy_SLwQgTMw0, rangeName);
  console.log(data);