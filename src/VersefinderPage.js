import React, { useState } from 'react';
import { Input, Button, Typography } from 'antd';

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

function VerseFinderPage() {
  const [findInput, setFindInput] = useState('');
  const [findOutput, setFindOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAskButtonClick = async () => {
    setIsLoading(true);
    try {
      const responseFind = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`, // Replace with your actual API Key
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: "I want to find a Bible verse based on the following: " + findInput + " (Provide the book, chapter, verse and text. Keep your answer as short as possible. If there is no Bible Verse based on what was just said, then just reply with no Bible verse found)"
            }
          ]
        })
      });

      //console.log("API Key from .env:", process.env.REACT_APP_API_KEY);
      const dataFind = await responseFind.json();
      let responseTextFind = dataFind.choices && dataFind.choices[0] && dataFind.choices[0].message ? dataFind.choices[0].message.content.trim() : "";

      setFindOutput(responseTextFind);





    } catch (error) {
      console.error("There was an error fetching the data:", error);

      setFindOutput("Error fetching a verse.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Title level={3}>Find a Bible verse based on a topic you enter</Title>
      
      <Input
        placeholder="e.g. Where in the Bible does it say that Jesus walked on water?"
        value={findInput}
        onChange={e => setFindInput(e.target.value)}
        rows={3}
        style={{ backgroundColor: 'lightgreen' }}
      />
      
      <Button type="primary" onClick={handleAskButtonClick} disabled={isLoading}>
        {isLoading ? "Loading..." : "Find"}
      </Button>

      <Title level={5}>Bible Verse</Title>
      <TextArea rows={8} value={findOutput} style={{ backgroundColor: 'lightcyan' }} readOnly />

    </div>
  );
}

export default VerseFinderPage;

