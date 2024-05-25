
<div class="breadcrumbs-wrap container-fluid mbot-50">
    <span>Blog / <?php the_title(); ?></span>
</div>

<div class="container">
    <div class="post-wrap mbot-50">
        <div class="back-btn-wrap">
            <a class="btn btn-primary" href="/blog"><i class="ph ph-arrow-left"></i>Terug naar blog</a>
        </div>
        <h1><?php the_title(); ?></h1>
    
        <div class="featured-image-wrap mtop-50 mbot-50">
            <?php the_post_thumbnail( 'large' ); ?>
        </div>
    
        <div class="posted-by-details">
            <?php the_author(); ?>,
            <?php the_date(); ?>
        </div>
        <?php
            the_content();
        ?>
    </div>

    <div class="contact-block mbot-100">
		<div class="content-wrap">
			<h2>Afspraak maken?</h2>
			<p>Neem contact met me op om een<br>voetmassage te plannen.</p>
		</div>
		<div role="doc-subtitle">Voetreflexmassage</div>
		<div class="btn-wrap">
			<a class="btn btn-secondary" href="/contact">Contact</a>
		</div>
	</div>
</div>