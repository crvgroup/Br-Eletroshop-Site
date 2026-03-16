export const downloadBloggerTemplate = () => {
  const xmlContent = `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:version='2' class='v2' expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
  <head>
    <b:include data='blog' name='all-head-content'/>
    <title><data:blog.pageTitle/></title>
    <b:skin><![CDATA[
      /*
      Name: Br Eletroshop Blogger Template
      Designer: AI Studio
      URL: www.breletroshop.com.br
      */
      body {
        font-family: 'Arial', sans-serif;
        background-color: #f9fafb;
        margin: 0;
        padding: 0;
      }
      .header {
        background-color: #FFEF00;
        padding: 20px;
        text-align: center;
      }
      .header h1 {
        color: #000;
        margin: 0;
        font-size: 2rem;
        font-weight: bold;
      }
      .smile {
        width: 100px;
        height: 15px;
        margin: 0 auto;
        border-bottom: 3px solid #000;
        border-radius: 50%;
      }
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
      }
      .post {
        background: #fff;
        padding: 20px;
        margin-bottom: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
    ]]></b:skin>
  </head>
  <body>
    <header class="header">
      <b:section class='header-section' id='header' maxwidgets='1' showaddelement='yes'>
        <b:widget id='Header1' locked='true' title='Br Eletroshop (Header)' type='Header' version='2' visible='true'>
          <b:includable id='main'>
            <h1><data:title/></h1>
            <div class="smile"></div>
            <p><data:description/></p>
          </b:includable>
        </b:widget>
      </b:section>
    </header>
    <main class="container">
      <b:section class='main-section' id='main' showaddelement='yes'>
        <b:widget id='Blog1' locked='true' title='Postagens no blog' type='Blog' version='2' visible='true'>
          <b:includable id='main'>
            <b:loop values='data:posts' var='post'>
              <article class="post">
                <h2><a expr:href='data:post.url'><data:post.title/></a></h2>
                <div class='post-body'>
                  <data:post.body/>
                </div>
              </article>
            </b:loop>
          </b:includable>
        </b:widget>
      </b:section>
    </main>
  </body>
</html>`;

  const blob = new Blob([xmlContent], { type: 'text/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'br-eletroshop-blogger-template.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
