<header class="vervolg-header break-from-container purple-wall">
	<div class="header-left">
		<div class="header-content">
            <div class="content-titles">
				<div class="container">
					<span role="doc-subtitle" class="pre-hidden">Blog</span>
					<h1><span class="pre-hidden"><?php the_title(); ?></span></h1>
				</div>
			</div>
		</div>
	</div>
	<div class="header-right">
		<div class="img-wrap pre-pre-hidden">
			<div class="simpleParallax">
                <?php the_post_thumbnail( 'full' ); ?>
            </div>
		</div>
	</div>
</header>

<div class="container">
    <div class="post-wrap">
        <div class="back-btn-wrap">
            <a class="btn btn-primary" href="/blog"><i class="ph ph-arrow-left"></i>Terug naar blog/nieuws</a>
        </div>
        <h1><?php the_title(); ?></h1>
        <span class="blog-date"><?php the_date(); ?></span>

        <?php
            the_content();
        ?>
    </div>
</div>