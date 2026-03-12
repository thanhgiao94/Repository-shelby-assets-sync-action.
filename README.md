# 🚀 Shelby Assets Sync Action

Automate your AI asset deployment with the power of **Shelby Global Object Storage**. This GitHub Action ensures your datasets, models, and assets are always synced to the DoubleZero fiber network.

## 🛠 Usage

Add this to your `.github/workflows/main.yml`:

```yaml
- name: Sync to Shelby
  uses: giaonguyen/shelby-assets-sync-action@main
  with:
    shelby-api-key: ${{ secrets.SHELBY_API_KEY }}
    source-dir: './models'
    bucket-name: 'my-ai-models'
