        <footer>
            <div class="container">
                <div class="row footer-top">
                    <div class="col-lg-2 col-sm-6 column-logo">
                        <?php
                            if (function_exists('the_custom_logo')) {
                                $custom_logo_id = get_theme_mod('custom_logo');
                                $logo = wp_get_attachment_image_src($custom_logo_id, 'full');
                            }
                        ?>
                        <img class="logo" src="<?=$logo[0] ?>" alt="Logo - Theaterkoor VOG" title="Logo - Theaterkoor VOG">
                        
                    </div>
                    <div class="col-lg-4 col-sm-6 column-contact-details">
                        <div class="contact-info">
                            <?php include('inc/contact-info.php'); ?>
                        </div>
                    </div>
                    <div class="col-lg-4 column-links">
                        <menu>
                            <?php
                                wp_nav_menu(
                                    array(
                                        'menu' => 'footer',
                                        'container' => '',
                                        'theme_location' => 'footer',
                                        'items_wrap' => '%3$s'
                                    )
                                );
                            ?>
                        </menu>
                    </div>
                    <div class="col-lg-2 column-socials">
                        <div class="socials">
                            <?php
                                wp_nav_menu(
                                    array(
                                        'menu' => 'socials',
                                        'container' => '',
                                        'theme_location' => 'socials',
                                        'items_wrap' => '%3$s',
                                        'walker' => new Social_Menu_Walker()
                                    )
                                );
                            ?>
                        </div>
                    </div>
                </div>
                <div class="endpage">
                    <?= date("Y") ?> <span class="year"></span> - Theaterkoor VOG.<br>Website door <a href="https://neonwebstudio.nl" target="_blank" title="Ga naar de website van Neonweb Studio">Arne Reijntjes - Neonweb</a>.
                </div>
            </div>
        </footer>

        <?php
            wp_footer();
        ?>
    </body>
</html>
