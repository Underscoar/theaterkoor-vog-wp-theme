<!doctype html>
<html lang="nl">

<head>
    <meta charset="utf-8">
    <meta name="description" content="Theaterkoor VOG">
    <meta name="keywords" content=" ">
    <link rel="canonical" href="https://theaterkoorvog.nl/">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <link rel="apple-touch-icon" sizes="180x180" href="<?=get_template_directory_uri() ?>/assets/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?=get_template_directory_uri() ?>/assets/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?=get_template_directory_uri() ?>/assets/favicon/favicon-16x16.png">
    <link rel="manifest" href="<?=get_template_directory_uri() ?>/assets/favicon/site.webmanifest">

    <style>img, picture { max-width: 100%; height: auto; object-fit: cover; }</style>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap" rel="stylesheet">

    <script src="https://unpkg.com/@phosphor-icons/web"></script>

    <?php
    wp_head();

    print_r(is_page_template('front-page.php'));
    ?>

    

    <meta name="theme-color" content="#BE356D">
</head>
    <body>
        <nav class="navbar">
            <div class="container">
                <div class="nav-wrap">
                    <span class="brand">Theaterkoor VOG</span>
                    <button class="menu-toggle" aria-label="Menu openen">
                        Menu
                        <div class="hamburger-wrap">
                            <span class="hamburger-line" aria-hidden="true"></span>
                            <span class="hamburger-line" aria-hidden="true"></span>
                            <span class="hamburger-line" aria-hidden="true"></span>
                        </div>
                    </button>
                </div>
            </div>
        </nav>

        <div class="full-menu" tabindex="-1" role="dialog">
            <div class="overlay-wall"></div>
            <div class="modal-content">
                <div class="content-wrap">
                    <div class="top-and-bottom"></div>
                    <div class="menu-content">
                        <menu class="nav-items">
                            <?php
                                wp_nav_menu(
                                    array(
                                        'menu' => 'primary',
                                        'container' => '',
                                        'theme_location' => 'primary',
                                        'items_wrap' => '%3$s'
                                    )
                                );
                            ?>
                        </menu>
                        <menu class="sub-menu-items"></menu>
                    </div>
                    <div class="top-and-bottom">
                        <div class="bottom-content contact-info">
                            <div class="item">
                                <strong>Theaterkoor VOG</strong><br>
                                Postbus 462<br>
                                5900 AL Venlo
                            </div>
                            <div class="item">
                                <strong>Neem contact op</strong><br>
                                <a href="tel:+31622692502">+31 6 22692502</a><br>
                                <a href="mailto:secretariaatvog@gmail.com">secretariaatvog@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>