<?php
    get_header();
?>
<!-- <header class="mbot-100">
    <div class="container">
        <div class="row">
            <div class="col-md-6 header-column order-2 order-md-1">
                <div class="header-content">
                    <div role="doc-subtitle">Eenvoud en aandacht</div>
                    <h1>Voetreflex bij<br>Anne-Mieke</h1>
                    <p>Voel je je gespannen? Heb je last van lichamelijke klachten? Of zit je gewoon niet lekker in je vel? Ben je op zoek naar een manier om je klachten te verminderen en je vitaler, meer in balans te voelen? Of zou je graag eens een ontspannende voetmassage willen ervaren? Voel je dan welkom in mijn praktijk voor voetreflextherapie.</p>
                    <p><a href="/voetreflextherapie" class="btn btn-primary">Lees meer</a></p>
                </div>
            </div>
            <div class="col-md-6 header-column order-1 order-md-2">
                <div class="img-wrap">
                    <picture><source type="image/webp" srcset="/img/pexels-elina-fairytale-3865561.jpg-500w.webp 500w" sizes="1000px"><img alt="Voetmassage behandeling" loading="lazy" decoding="async" src="/img/pexels-elina-fairytale-3865561.jpg-500w.jpeg" width="500" height="750"></picture>
                </div>
            </div>
        </div>
    </div>
</header> -->


<main id="main">
    <div class="container">
        <?php
            if (have_posts()) {
                while(have_posts()) {
                    the_post();
                    the_content();
                }
            }
        ?>
    </div>
</main>

<?php
    get_footer();
?>