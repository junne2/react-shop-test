import React from 'react'

function ErrorBanner({ message }) {
    let errorMessage = message || "에러가 발생했습니다.";

    return (
    <div
        data-testid="error-banner"
        style={{ backgroundColor: "red", color: "white"}}
    >
        {errorMessage}
    </div>
  );
}

export default ErrorBanner;