import { endpoint, xMasterKey, xAdminKey, xBinName, xCollectionId, xBinPrivate } from "./config.js";
class Logger {
    static logError(message: string, error: Error, errorInfo?: object) {
      console.error(message, error, errorInfo);
      this.sendToJsonBin(message, error, errorInfo);
    }
  
    private static async sendToJsonBin(message: string, error: Error, errorInfo?: object) {
      const payload = {
        error: {
          errorInfo: errorInfo ? JSON.stringify(errorInfo) : "",
          errorMessage: error.message,
          timestamp: new Date().toISOString()
        },
        metadata: {
          created: new Date().toISOString(),
          component: errorInfo ? (errorInfo as any).componentStack || null : null
        }
      };
  
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Access-Key': xAdminKey,
            'X-Master-Key': xMasterKey,
            'X-Bin-Name': xBinName || '',
            'X-Bin-Private': xBinPrivate || 'false',
            'X-Collection-Id': xCollectionId || ''
          },
          body: JSON.stringify(payload)
        });
  
        if (!response.ok) {
          throw new Error(`Error posting to Jsonbin.io: ${response.statusText}`);
        }
  
        const data = await response.json();
        console.log('Posted to Jsonbin.io:', data);
      } catch (err) {
        console.error('Failed to post to Jsonbin.io:', err);
      }
    }
  }
  
  export default Logger;
  