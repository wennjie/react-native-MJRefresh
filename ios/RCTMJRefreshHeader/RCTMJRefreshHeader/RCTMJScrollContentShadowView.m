/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "RCTMJScrollContentShadowView.h"

#import <yoga/Yoga.h>

#import <React/RCTUtils.h>

@implementation RCTMJScrollContentShadowView

- (void)layoutWithMetrics:(RCTLayoutMetrics)layoutMetrics
            layoutContext:(RCTLayoutContext)layoutContext
{
    if (layoutMetrics.layoutDirection == UIUserInterfaceLayoutDirectionRightToLeft) {
        // Motivation:
        // Yoga place `contentView` on the right side of `scrollView` when RTL layout is enfoced.
        // That breaks everything; it is completely pointless to (re)position `contentView`
        // because it is `contentView`'s job. So, we work around it here.
        
        layoutContext.absolutePosition.x += layoutMetrics.frame.size.width;
        layoutMetrics.frame.origin.x = 0;
    }
    
    [super layoutWithMetrics:layoutMetrics layoutContext:layoutContext];
}

@end
