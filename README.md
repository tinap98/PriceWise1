# PriceWise: Smart E-commerce Comparison

## Overview

**PriceWise** is a smart e-commerce price comparison tool designed to help users find the best deals on products across major online marketplaces such as Amazon and Flipkart. The project automates the process of scraping product details, including titles, prices, ratings, and images, providing users with an efficient way to compare prices and make informed buying decisions.

## Features

- Scrapes product details such as title, price, rating, image URL, and features.
- Supports multiple brands and products from Flipkart and Amazon.
- Automatically handles pagination and retries failed requests.
- Data is saved in structured CSV files for easy access and analysis.
- Error handling and user-agent rotation to avoid detection by websites.

## Technologies Used

- **Python**: For writing the scraping scripts.
- **BeautifulSoup**: For parsing HTML content and extracting product details.
- **Requests**: For sending HTTP requests to e-commerce websites.
- **Pandas**: For organizing and saving scraped data into CSV files.
- **Git**: For version control.

## Project Files

- `.gitignore`: Specifies files and directories that should be ignored by Git (e.g., temporary files, unnecessary data).
- `LICENSE`: The project license file, licensed under Apache License 2.0.
- `README.md`: The project documentation you're currently reading.
- `Scrape.ipynb`: The Jupyter notebook containing the scraping code and execution.
- `final_product_details.xls`: Contains the scraped product details from Flipkart and Amazon.
- `final_product_details_with_links.xls`: Contains product details along with their respective links.
- `flipkart_mobiles.xls`: Contains mobile product data scraped from Flipkart.
- `flipkart_mobiles_combined.xls`: The combined data from all Flipkart mobile pages.
- `products.xls`: A file containing product data ready for price comparison.

## Setup and Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/tinap98/PriceWise1.git
    ```
2. Install the required dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3. Run the scraper:
    ```bash
    python scraper.py
    ```

## How It Works

1. The scraper fetches product details from multiple pages of Flipkart and Amazon.
2. Each product's title, price, rating, image URL, and features are extracted and saved in CSV format.
3. Data is collected in batches of 50 products and merged into a single CSV file.

## Usage

- Make sure to edit `scraper.py` to add the correct URLs for the products or brands you're targeting.
- Run the script and monitor the output files generated for your comparison.

## Contribution

Feel free to fork this repository and submit pull requests for any new features or improvements. Please open an issue first to discuss what you would like to change.

## License

This project is licensed under the Apache License, Version 2.0. See the [LICENSE](LICENSE) file for details.
