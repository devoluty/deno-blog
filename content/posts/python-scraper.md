---
title: How to code a web scraper with python
date: 2023-02-22
excerpt: Python web scraper tutorial
author: Devolutyy
---

# How to Code a Web Scraper in Python with Beautiful Soup 4

Web scraping is the process of extracting data from websites. One of the most
popular Python libraries for web scraping is Beautiful Soup 4, which is a
library for pulling data out of HTML and XML files.

## Step 1: Install Beautiful Soup 4

The first step is to install Beautiful Soup 4. You can do this by running the
following command:

```bash
pip install beautifulsoup4
```

Or, if you have different python versions in your system

```bash
pip3 install beautifulsoup4
```

Alternatively, you can use [Google Collab](https://colab.research.google.com)
for this tutorial. Regardless of the method you choose, you will need to import
the following libraries:

```python
import requests
from bs4 import BeautifulSoup
```

## Step 2: Find the URL to Scrape

The next step is to find the URL of the website that you want to scrape. Once
you have the URL, you can use the `requests` library in Python to get the HTML
content of the page. In this tutorial, we will use
[The Needle Drop Page](https://www.theneedledrop.com/), the blog of a well-known
YouTuber.

```python
url = "https://www.theneedledrop.com/"
```

## Step 3: Parse the HTML with Beautiful Soup

Now that you have the HTML content of the page, you can use Beautiful Soup to
parse it and extract the data that you want.

```python
url = "https://www.theneedledrop.com/"
response = requests.get(url)
soup = BeautifulSoup(response.content, "html.parser")
```

To verify that the code was executed correctly, you can use the `print(soup)`
command to view the HTML content.

## Step 4: Save the Data

Finally, you can save the data that you have scraped in various formats, such as
a CSV file or a database. In this example, we will simply display the
information we want in the terminal.

First, you will need to identify the information that you need in the HTML. In
this example, we will scrape the track review section, where you can identify
the `sqs-block-content` div, but it is easier to simply take the divs with the
`meta-description` class because it is a unique class for track names. You will
need to carefully examine the divs, HTML tags, classes, or IDs of the
information you want in your page. To learn about the methods of different
Beautiful Soup 4 functions, you can refer to the
[documentation](https://beautiful-soup-4.readthedocs.io/en/latest/).

```python
def get_tracks():
  tracks = soup.find_all("div", class_="meta-description")
  for track in tracks:
    print(track.text)
        
get_tracks()
```

In this example, we are displaying the text inside the track element, which is a
`<p>` tag.

You can also extract the album section by identifying the `summary-title-link`
`<a>` tag, as it is unique in the HTML for albums and podcasts. In the following
code, we take `albums[:5]` because they are the first five album elements.

```python
def get_albums():
  albums = soup.find_all("a", class_="summary-title-link")
  for album in albums[:5]:
    print(album.text)

get_albums()
```

## Conclusion

Web scraping can be a powerful tool for extracting data from websites. With
Beautiful Soup 4, Python makes it easy to scrape websites and extract the data
that you need. By following the steps outlined in this guide, you can get
started with web scraping in no time!
