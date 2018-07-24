---
layout: page
title: お問い合わせ
permalink: /contact/
---
<nav class="site-nav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <a class="page-link" href="{{ site.url }}/">最新記事</a>
    <a class="page-link" href="{{ site.url }}/posts">記事一覧</a>
    <a class="page-link" href="{{site.url}}/about/">このサイトについて</a>
    <a class="current page-link" href="{{site.url}}/contact/">お問い合わせ</a>
</nav>

メッセージやご質問、お問い合わせ等ございましたらお気軽にご記入ください。



<form id="contact-form" class="form" action="https://getsimpleform.com/messages?form_api_token=4275d0416e7a7ca175a9cb172af816f8" method="POST" enctype="multipart/form-data">
        <ul class="contact-ul">
            <li class="contact-li">
                <label class="contact-label" for="name">お名前:</label>
                <input type="text" placeholder="お名前" id="name" class="contact-input" name="name" tabindex="1"/>
            </li>
            <li class="contact-li">
                <label class="contact-label" for="email">メールアドレス:</label>
                <input type="email" placeholder="メールアドレス" id="email" class="contact-input" name="email" tabindex="2"/>
            </li>
            <li class="contact-li">
                <label class="contact-label" for="message">メッセージ:</label>
                <textarea class="contact-textarea" placeholder="メッセージ" class="contact-input" rows="4" id="message" name="message" tabindex="3"></textarea>
            </li>

        </ul>
        <div class="contact-submit">
          <input type="submit" value="送信" id="submit"/>
          <input type="hidden" name='redirect_to' value="http://multipotnomad.github.io/thank-you/" />
        </div>
</form>
