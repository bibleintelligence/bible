import React, { useState } from 'react';
import { Input, Button, Typography } from 'antd';

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

function PrayerPage() {
  const [prayInput, setPrayInput] = useState('');
  const [prayOutput, setPrayOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAskButtonClick = async () => {
    setIsLoading(true);
    try {
      const responsePray = await fetch('https://api.openai.com/v1/chat/completions', {
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
              content: "Provide a short Christian Prayer for the following: " + prayInput + " (If the input is not worthy of a prayer or doesn't make sense, reply with the Lord's Prayer, Our Father who art in heaven...)"
            }
          ]
        })
      });

      //console.log("API Key from .env:", process.env.REACT_APP_API_KEY);
      const dataPray = await responsePray.json();
      let responseTextPray = dataPray.choices && dataPray.choices[0] && dataPray.choices[0].message ? dataPray.choices[0].message.content.trim() : "";

      setPrayOutput(responseTextPray);





    } catch (error) {
      console.error("There was an error fetching the data:", error);

      setPrayOutput("Error fetching a prayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Title level={3}>Enter something you would like to pray about</Title>
      
      <Input
        placeholder="e.g. Help me to forgive"
        value={prayInput}
        onChange={e => setPrayInput(e.target.value)}
        style={{ backgroundColor: 'lightgreen' }}
      />
      
      <Button type="primary" onClick={handleAskButtonClick} disabled={isLoading}>
        {isLoading ? "Loading..." : "Pray"}
      </Button>

      <Title level={5}>Prayer</Title>
      <TextArea rows={8} value={prayOutput} style={{ backgroundColor: 'lightgoldenrodyellow' }} readOnly />

    </div>
  );
}

export default PrayerPage;

