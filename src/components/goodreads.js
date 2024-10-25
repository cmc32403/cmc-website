import React from 'react';

const Goodreads = () => {
  const htmlString = `
    <!-- Your HTML widget code here -->
          <style type="text/css" media="screen">
        .gr_grid_container {
          width: 1100px;
          height: 60px
        }

        .gr_grid_book_container {
          /* customize book cover container div here */
          float: left;
          width: 60px;
          height: 80px;
          padding: 0px 0px;
          overflow: hidden;
        }
      </style>
      <div id="gr_grid_widget_1729736736">
        <div class="gr_grid_container">
          <div class="gr_grid_book_container"><a title="We Were Liars" rel="nofollow" href="https://www.goodreads.com/book/show/16143347-we-were-liars"><img alt="We Were Liars" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1402749479l/16143347._SY75_.jpg" /></a></div>
          <div class="gr_grid_book_container"><a title="Normal People" rel="nofollow" href="https://www.goodreads.com/book/show/41057294-normal-people"><img alt="Normal People" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1571423190l/41057294._SY75_.jpg" /></a></div>
          <div class="gr_grid_book_container"><a title="Verity" rel="nofollow" href="https://www.goodreads.com/book/show/59344312-verity"><img alt="Verity" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1634158558l/59344312._SY75_.jpg" /></a></div>
          <div class="gr_grid_book_container"><a title="The Goodbye Bride (Summer Harbor, #2)" rel="nofollow" href="https://www.goodreads.com/book/show/25891528-the-goodbye-bride"><img alt="The Goodbye Bride" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1436664301l/25891528._SY75_.jpg" /></a></div>
          <div class="gr_grid_book_container"><a title="Reminders of Him" rel="nofollow" href="https://www.goodreads.com/book/show/58341222-reminders-of-him"><img alt="Reminders of Him" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1627673942l/58341222._SX50_.jpg" /></a></div>
          <div class="gr_grid_book_container"><a title="Malibu Rising" rel="nofollow" href="https://www.goodreads.com/book/show/55404546-malibu-rising"><img alt="Malibu Rising" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618293107l/55404546._SY75_.jpg" /></a></div>
          <div class="gr_grid_book_container"><a title="Call Me By Your Name (Call Me By Your Name, #1)" rel="nofollow" href="https://www.goodreads.com/book/show/36336078-call-me-by-your-name"><img alt="Call Me By Your Name" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1519203520l/36336078._SY75_.jpg" /></a></div>
          <div class="gr_grid_book_container"><a title="Eleanor & Park" rel="nofollow" href="https://www.goodreads.com/book/show/15745753-eleanor-park"><img alt="Eleanor & Park" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1341952742l/15745753._SX50_.jpg" /></a></div>
          <div class="gr_grid_book_container"><a title="Ugly Love" rel="nofollow" href="https://www.goodreads.com/book/show/17788401-ugly-love"><img alt="Ugly Love" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1632597571l/17788401._SY75_.jpg" /></a></div>
          <div class="gr_grid_book_container"><a title="The Seven Husbands of Evelyn Hugo" rel="nofollow" href="https://www.goodreads.com/book/show/32620332-the-seven-husbands-of-evelyn-hugo"><img alt="The Seven Husbands of Evelyn Hugo" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1664458703l/32620332._SY75_.jpg" /></a></div>
          <div class="gr_grid_book_container"><a title="Punk 57" rel="nofollow" href="https://www.goodreads.com/book/show/41021967-punk-57"><img alt="Punk 57" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1689301728l/41021967._SY75_.jpg" /></a></div>
          <div class="gr_grid_book_container"><a title="Everything I Know About Love" rel="nofollow" href="https://www.goodreads.com/book/show/46041465-everything-i-know-about-love"><img alt="Everything I Know About Love" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1563761980l/46041465._SX50_.jpg" /></a></div>
          <div class="gr_grid_book_container"><a title="Love and Other Words" rel="nofollow" href="https://www.goodreads.com/book/show/36206591-love-and-other-words"><img alt="Love and Other Words" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1667534514l/36206591._SY75_.jpg" /></a></div>
          <div class="gr_grid_book_container"><a title="All Your Perfects" rel="nofollow" href="https://www.goodreads.com/book/show/38926487-all-your-perfects"><img alt="All Your Perfects" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1531682842l/38926487._SY75_.jpg" /></a></div>
          <div class="gr_grid_book_container"><a title="People We Meet on Vacation" rel="nofollow" href="https://www.goodreads.com/book/show/54985743-people-we-meet-on-vacation"><img alt="People We Meet on Vacation" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618913179l/54985743._SX50_.jpg" /></a></div>
          <div class="gr_grid_book_container"><a title="Maybe Someday (Maybe, #1)" rel="nofollow" href="https://www.goodreads.com/book/show/62967882-maybe-someday"><img alt="Maybe Someday" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1666362550l/62967882._SY75_.jpg" /></a></div>
          <div class="gr_grid_book_container"><a title="It Ends with Us (It Ends with Us #1)" rel="nofollow" href="https://www.goodreads.com/book/show/27362503-it-ends-with-us"><img alt="It Ends with Us" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1688011813l/27362503._SY75_.jpg" /></a></div>
          <div class="gr_grid_book_container"><a title="The Summer of Broken Rules" rel="nofollow" href="https://www.goodreads.com/book/show/49259788-the-summer-of-broken-rules"><img alt="The Summer of Broken Rules" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1600698670l/49259788._SX50_.jpg" /></a></div>
          <div class="gr_grid_book_container"><a title="The Midnight Library" rel="nofollow" href="https://www.goodreads.com/book/show/52578297-the-midnight-library"><img alt="The Midnight Library" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602190253l/52578297._SY75_.jpg" /></a></div>
          <div class="gr_grid_book_container"><a title="The Love Hypothesis" rel="nofollow" href="https://www.goodreads.com/book/show/56732449-the-love-hypothesis"><img alt="The Love Hypothesis" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611937942l/56732449._SX50_.jpg" /></a></div>
          <noscript><br/>Share <a rel="nofollow" href="/">book reviews</a> and ratings with Christina, and even join a <a rel="nofollow" href="/group">book club</a> on Goodreads.</noscript>
        </div>

      </div>
      <script src="https://www.goodreads.com/review/grid_widget/175302545.Christina's%20bookshelf:%20read?cover_size=small&hide_link=true&hide_title=true&num_books=50&order=d&shelf=read&sort=rating&widget_id=1729736736" type="text/javascript" charset="utf-8"></script>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
  );
};

export default Goodreads;

