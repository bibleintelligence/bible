import React from 'react';

const DonationPage = () => {
    return (
        <div>
          <h2>Donate to Us</h2>
          <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="YOUR_BUTTON_ID_HERE" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          </form>
        </div>
      );
};

export default DonationPage;

  