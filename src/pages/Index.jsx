import { Box, Container, Flex, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" bg="#f7f7f7">
      {/* Navigation Bar */}
      <Flex as="nav" bg="#fff1e5" color="black" p={4} position="sticky" top={0} zIndex={1}>
        <HStack spacing={8} align="center">
          <Heading size="md">Financial Times</Heading>
          <HStack spacing={4}>
            <Link href="#">Home</Link>
            <Link href="#">World</Link>
            <Link href="#">Politics</Link>
            <Link href="#">Business</Link>
            <Link href="#">Tech</Link>
            <Link href="#">Culture</Link>
          </HStack>
        </HStack>
      </Flex>

      {/* Main Content Area */}
      <Flex mt={8}>
        <Box flex="3">
          {/* Headline Section */}
          <Box mb={8}>
            <Heading size="lg" mb={4}>Top News</Heading>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="Top news" />
              <Box p={4}>
                <Heading size="md">Headline of the Top News</Heading>
                <Text mt={2}>Brief description of the top news article. This is a summary of the news content.</Text>
              </Box>
            </Box>
          </Box>

          {/* Category Sections */}
          {["World", "Politics", "Business", "Tech", "Culture"].map((category) => (
            <Box mb={8} key={category}>
              <Heading size="lg" mb={4}>{category}</Heading>
              <Stack spacing={4}>
                {[1, 2, 3].map((article) => (
                  <Flex key={article} borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Image src="https://via.placeholder.com/150" alt={`${category} article ${article}`} />
                    <Box p={4}>
                      <Heading size="md">Article {article} Headline</Heading>
                      <Text mt={2}>Brief description of the article. This is a summary of the news content.</Text>
                    </Box>
                  </Flex>
                ))}
              </Stack>
            </Box>
          ))}
        </Box>

        {/* Sidebar */}
        <Box flex="1" ml={8} bg="#f7f7f7">
          <Heading size="lg" mb={4}>Trending</Heading>
          <Stack spacing={4}>
            {[1, 2, 3].map((trend) => (
              <Box key={trend} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                <Heading size="md">Trending Article {trend}</Heading>
                <Text mt={2}>Brief description of the trending article.</Text>
              </Box>
            ))}
          </Stack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="#fff1e5" color="black" p={4} mt={8}>
        <Flex justify="space-between" align="center">
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={4}>
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaInstagram /></Link>
          </HStack>
        </Flex>
        <Flex justify="space-between" mt={4}>
          <Link href="#">Contact</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;