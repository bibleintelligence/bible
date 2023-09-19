import React, { useState } from 'react';
import { Input, Button, Typography } from 'antd';

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

function BiblePage() {
  const [verseInput, setVerseInput] = useState('');
  const [bibleVerseOutput, setBibleVerseOutput] = useState('');
  const [commentaryOutput, setCommentaryOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAskButtonClick = async () => {
    setIsLoading(true);
    try {
      const responseGood = await fetch('https://api.openai.com/v1/chat/completions', {
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
              content: "Provide the ESV Bible verse of the following: " + verseInput + " (If this isn't a Bible verse, either provide a close representation or come back with a message saying, please provide a valid bible verse) Just provide the text of the bible verse, no need to mention that it comes from the ESV"
            }
          ]
        })
      });

      //console.log("API Key from .env:", process.env.REACT_APP_API_KEY);
      const dataGood = await responseGood.json();
      let responseTextGood = dataGood.choices && dataGood.choices[0] && dataGood.choices[0].message ? dataGood.choices[0].message.content.trim() : "";

      setBibleVerseOutput(responseTextGood);



      const responseComment = await fetch('https://api.openai.com/v1/chat/completions', {
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
              content: "Provide a Protestant commentary on the following verse : " + verseInput + " (If this isn't a Bible verse, either provide a close representation or come back with a message saying, please provide a valid bible verse). Do not restate the bible verse and its text as that is provided else where, rather just give the commentary. Limit your answer to 5 sentences."
            }
          ]
        })
      });

      const dataComment = await responseComment.json();
      let responseTextComment = dataComment.choices && dataComment.choices[0] && dataComment.choices[0].message ? dataComment.choices[0].message.content.trim() : "";




      setCommentaryOutput(responseTextComment);



    } catch (error) {
      console.error("There was an error fetching the data:", error);
      setCommentaryOutput("Error fetching commentary.");
      setBibleVerseOutput("Error fetching bible verse.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Title level={3}>Enter a Bible verse that you would like commentary on</Title>
      
      <Input
        placeholder="e.g. John 3:16"
        value={verseInput}
        onChange={e => setVerseInput(e.target.value)}
        style={{ backgroundColor: 'lightgreen' }}
      />
      
      <Button type="primary" onClick={handleAskButtonClick} disabled={isLoading}>
        {isLoading ? "Loading..." : "Ask"}
      </Button>

      <Title level={5}>Bible Verse</Title>
      <TextArea rows={6} value={bibleVerseOutput} style={{ backgroundColor: 'lightblue' }} readOnly />

      <Title level={5}>Bible Commentary</Title>
      <TextArea rows={6} value={commentaryOutput} style={{ backgroundColor: 'lightblue' }} readOnly />
    </div>
  );
}

export default BiblePage;
