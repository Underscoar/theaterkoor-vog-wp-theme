<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<!-- <p <?php echo get_block_wrapper_attributes(); ?>>
	<?php esc_html_e( 'Home Header Block – hello from a dynamic block!', 'home-header-block' ); ?>
</p> -->

<header class="home-header purple-wall break-from-container">
	<div class="header-left">
		<div class="header-content">
			<h1>
				<span class="opacity-0 pre-hidden">Wij zijn</span><br>
				<span class="opacity-0 pre-hidden"><strong>Theaterkoor VOG</strong>.</span><br>
				<span class="opacity-0 pre-hidden">Musical,</span><br>
				<span class="opacity-0 pre-hidden">operette, en theater</span><br>
				<span class="opacity-0 pre-hidden">in Venlo.</span>
			</h1>
			<div class="content-content">
				<p class="opacity-0 pre-hidden">Een vereniging voor jong en oud, Theaterkoor VOG onderscheidt zich in zijn uiteenlopende producties. Van kleine concerten tot grote musicals in uitverkochte theaterzalen. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
				<p class=" opacity-0 pre-hidden">
					<a class="btn btn-primary" href="#">
						<span>
							Lees meer over ons
						</span>
						<i class="ph ph-arrow-right"></i>
					</a>
				</p>
			</div>
		</div>
	</div>
	<div class="header-right">
		<div class="img-wrap">
			<img src="<?= $attributes['mediaUrl'] ?>" width="<?= $attributes['mediaWidth'] ?>" height="<?= $attributes['mediaHeight'] ?>">
		</div>
	</div>
</header>

<div class="onzin" style="height: 200vh;"></div>