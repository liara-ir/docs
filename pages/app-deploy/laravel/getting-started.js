import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>Laravel سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>
    <h1>برنامه‌های Laravel</h1>
    <span className="pageDescription">(Laravel Apps)</span>
    <h3>🚀 شروع به کار</h3>
    <video
      src="https://files.liara.ir/liara/laravel.mp4"
      controls="controls"
      className="block w-full"
    ></video>
    <p>
      در این بخش به شما کمک میکنیم که در سریع‌ترین زمان ممکن برنامه Laravel ای‌
      که نوشتید را روی بستر ابری لیارا مستقر کنید. در هر گام، شما با یک ویژگی در
      لیارا آشنا میشوید و میتوانید از آن‌ها در پروژه‌ی‌تان استفاده کنید.
    </p>
    {/* <Notice variant="info"> */}
    در حال حاضر در سرویس ابری لیارا، نسخه‌های زیر در برنامه‌های Laravel پشتیبانی
    میشود:
    <ul dir="ltr">
      <li>5.8.^</li>
      <li>6.^</li>
      <li>7.^</li>
    </ul>
    {/* </Notice> */}
    {/* <pre>
      <code>
        {`$ git clone https://github.com/liara-cloud/laravel-getting-started
$ cd laravel-getting-started`}
      </code>
    </pre>
    <p>
      برای این‌که مطمئن شوید همه چیز درست کار می‌کند، کافیست برنامه را در سیستم
      خودتان به صورت زیر اجرا کنید.
    </p>
    <pre>
      <code>
        {`$ composer install
$ php artisan serve --port 8000`}
      </code>
    </pre>
    <p>
      و درنهایت داخل مرورگر پروژه را با آدرس
      <span className="code">http://127.0.0.1:8000</span> باز کنید. اگر همه چیز
      درست بود یعنی آماد‌ه‌اید که برنامه را روی لیارا مستقر کنید.
    </p> */}
    <Link href="/app-deploy/laravel/deploy">متوجه شدم، برو بعدی!</Link>
  </Layout>
);