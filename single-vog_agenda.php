<?php
    get_header();
?>
<main id="main">
<?php
    if (have_posts()) {
        while(have_posts()) {
            the_post();
            get_template_part('template-parts/content', 'agenda');
        }
    }
?>
</main>

<?php
    get_footer();
?>