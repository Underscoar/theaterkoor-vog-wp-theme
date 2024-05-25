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
        <nav>
            <!-- <div class="container">
                <div class="nav-wrap">
                    <a href="/" class="logo-wrap">
                        <?php
                            if (function_exists('the_custom_logo')) {
                                $custom_logo_id = get_theme_mod('custom_logo');
                                $logo = wp_get_attachment_image_src($custom_logo_id, 'full');
                            }
                        ?>
                            <img src="<?=$logo[0] ?>" alt="Logo - Voetreflex bij Anne-Mieke" title="Logo -Voetreflex bij Anne-Mieke" width="64" height="51">
                    </a>

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

                    <button class="menu-toggle" aria-label="Menu openen">
                      <span class="hamburger-line" aria-hidden="true"></span>
                      <span class="hamburger-line" aria-hidden="true"></span>
                      <span class="hamburger-line" aria-hidden="true"></span>
                    </button>
                </div>
            </div> -->
        </nav>