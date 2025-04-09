
import React from 'react';

const WordPressInfoBox: React.FC = () => {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
      <h3 className="font-medium text-amber-800 mb-2">Don't have a WordPress site?</h3>
      <p className="text-sm text-amber-700 mb-3">
        You can use our demo WordPress URL (https://demo.wp-api.org) for testing, or follow these steps to set up your own:
      </p>
      <ol className="list-decimal list-inside text-sm text-amber-700 space-y-1">
        <li>Create a WordPress site (via wordpress.com or self-hosted)</li>
        <li>Make sure the REST API is enabled</li>
        <li>Create posts with the category "Baby Growth Advice" (or ID 5)</li>
        <li>Enter your site URL above and test the connection</li>
      </ol>
    </div>
  );
};

export default WordPressInfoBox;
