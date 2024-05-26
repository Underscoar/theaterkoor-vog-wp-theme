<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<p>
	<a href="<?php echo $attributes['link']?>" class="<?php echo $attributes['btnType'] ?>" <?php echo $attributes['isTargetBlank'] ? 'target="_blank"' : ''; ?> title="<?php echo esc_attr($attributes['linkTitle']); ?>">
		<span>
			<?php echo $attributes['content']; ?>
		</span>

		<?php if ($attributes['withArrow']) { ?>
			<i class="ph ph-arrow-right"></i>
		<?php } ?>
	</a>
</p>