/*
 *  Copyright (c) 2011-2021, Zingaya, Inc. All rights reserved.
 */

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

/**
 * Types of video stream.
 *
 * @namespace call
 */
typedef NS_ENUM(NSInteger, VIVideoStreamType) {
    /** Indicates that video stream source is camera or custom video source. */
            VIVideoStreamTypeVideo = 1,
    /** Indicates that video stream source is screen sharing. */
            VIVideoStreamTypeScreenSharing = 2,
};

@protocol RTCVideoRenderer;

/**
 * Interface that represents video streams. It may be used to add or remove video renderers.
 *
 * @namespace call
 */
@interface VIVideoStream : NSObject

/**
 * A video renderers associated with the stream. UI elements of RTCVideoRenderer type are used to display local preview or remote video.
 */
@property(nonatomic, strong, readonly) NSSet<id <RTCVideoRenderer>> *renderers;

/**
 * The video stream id.
 */
@property(nonatomic, retain, readonly) NSString *streamId;

/**
 * The video stream type.
 */
@property(nonatomic, assign, readonly) VIVideoStreamType type;

/**
 * Direct initialization of this object can produce undesirable consequences.
 */
- (instancetype)init NS_UNAVAILABLE;

/**
 * Add new video renderer to the video stream. UI elements of RTCVideoRenderer type are used to display local preview or remote video.
 *
 * @param renderer New video renderer to be added.
 */
- (void)addRenderer:(id <RTCVideoRenderer>)renderer;

/**
 * Remove previously added video renderer from the video stream. UI elements of RTCVideoRenderer type are used to display local preview or remote video.
 *
 * @param renderer Previously added video renderer.
 */
- (void)removeRenderer:(id <RTCVideoRenderer>)renderer;

/**
 * Remove all video renderers associated with the video stream.
 */
- (void)removeAllRenderers;

@end

NS_ASSUME_NONNULL_END
