const core = require('@actions/core');
const { ShelbyClient } = require('@shelby-xyz/sdk');
const path = require('path');

async function run() {
  try {
    const apiKey = core.getInput('shelby-api-key');
    const sourceDir = core.getInput('source-dir');
    const bucket = core.getInput('bucket-name');

    const client = new ShelbyClient({ apiKey });

    console.log(`🚀 Starting sync from ${sourceDir} to Shelby bucket: ${bucket}`);
    
    // Giả định hàm sync toàn bộ thư mục của Shelby SDK
    await client.syncDirectory(path.resolve(sourceDir), {
      bucket: bucket,
      options: { network: 'global-fiber' }
    });

    core.info('✅ Successfully synced all assets to Shelby Global Storage!');
  } catch (error) {
    core.setFailed(`❌ Sync failed: ${error.message}`);
  }
}

run();
