import { Box, HStack, Stack, Text, VStack } from "native-base";
import React from "react";

export default function ProgressBar({ data, isTextShow, ...props }) {
  let total = data.reduce((a, b) => a + b["value"], 0);

  let values =
    data &&
    data.length &&
    data.map(function (item, i) {
      if (item.value > 0) {
        return (
          <Box
            float="left"
            textAlign="center"
            color={item.color}
            w={(item.value / total) * 100 + "%"}
            key={i}
            _text={{
              color: "white",
              bg: item.color,
              w: "fit-content",
              px: "1",
              py: "2px",
              mb: "1",
              rounded: "sm",
              fontSize: 10,
              fontWeight: 600,
            }}
          >
            {item.value.toString().padStart(2, "0")}
          </Box>
        );
      }
    });

  let bars =
    data &&
    data.length &&
    data.map(function (item, i) {
      if (item.value > 0) {
        return (
          <Box
            key={i}
            h="10px"
            bg={item.color}
            w={(item.value / total) * 100 + "%"}
          />
        );
      }
    });

  let legends;
  if (isTextShow) {
    legends =
      data &&
      data.length &&
      data.map(function (item, i) {
        if (item.value > 0) {
          return (
            <Text key={i} color={item.color}>
              <Text fontSize="25px">●</Text>
              <Text>{item.name}</Text>
            </Text>
          );
        }
      });
  }

  return (
    <Stack {...props}>
      <VStack>
        <HStack>{values == "" ? "" : values}</HStack>
        <HStack overflow="hidden" rounded="xl">
          {bars == "" ? "" : bars}
        </HStack>
        {isTextShow ? (
          <HStack alignSelf="center" space={1}>
            {legends == "" ? "" : legends}
          </HStack>
        ) : (
          ""
        )}
      </VStack>
    </Stack>
  );
}
